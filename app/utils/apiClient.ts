'use client';

/**
 * Enhanced API Client with retry logic, caching, and error handling
 */

export interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  headers?: Record<string, string>;
  cacheOptions?: {
    ttl?: number;
    maxSize?: number;
  };
}

export interface RequestConfig extends Omit<RequestInit, 'cache'> {
  url: string;
  cacheOptions?: {
    ttl?: number;
    maxSize?: number;
  };
  retries?: number;
  timeout?: number;
  skipCache?: boolean;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ApiClient {
  private config: Required<ApiClientConfig>;
  private cache: Map<string, { data: any; expiry: number }> = new Map();

  constructor(config: ApiClientConfig = {}) {
    this.config = {
      baseURL: config.baseURL || '',
      timeout: config.timeout || 10000,
      retries: config.retries || 3,
      retryDelay: config.retryDelay || 1000,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      },
      cacheOptions: {
        ttl: config.cacheOptions?.ttl || 5 * 60 * 1000, // 5 minutes
        maxSize: config.cacheOptions?.maxSize || 100
      }
    };
  }

  /**
   * Make a GET request
   */
  async get<T = unknown>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, url, method: 'GET' });
  }

  /**
   * Make a POST request
   */
  async post<T = unknown>(url: string, data?: unknown, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a PUT request
   */
  async put<T = unknown>(url: string, data?: unknown, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a PATCH request
   */
  async patch<T = unknown>(url: string, data?: unknown, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a DELETE request
   */
  async delete<T = unknown>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>({ ...config, url, method: 'DELETE' });
  }

  /**
   * Make a request with retry logic and caching
   */
  private async request<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    const {
      url,
      cacheOptions,
      retries = this.config.retries,
      timeout = this.config.timeout,
      skipCache = false,
      ...requestConfig
    } = config;

    const fullUrl = this.buildUrl(url);
    const cacheKey = this.buildCacheKey(fullUrl, requestConfig);

    // Check cache first
    if (!skipCache && requestConfig.method === 'GET') {
      const cached = this.getFromCache<T>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    // Make request with retry logic
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await this.makeRequest(fullUrl, {
          ...requestConfig,
          timeout
        });

        const data = await this.parseResponse<T>(response);
        const apiResponse: ApiResponse<T> = {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        };

        // Cache successful GET requests
        if (!skipCache && requestConfig.method === 'GET') {
          this.setCache(cacheKey, apiResponse, cacheOptions?.ttl);
        }

        return apiResponse;
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on the last attempt
        if (attempt === retries) {
          break;
        }

        // Wait before retrying
        await this.delay(this.config.retryDelay * Math.pow(2, attempt));
      }
    }

    throw lastError || new Error('Request failed');
  }

  /**
   * Make the actual HTTP request
   */
  private async makeRequest(url: string, config: RequestInit & { timeout?: number }): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout || this.config.timeout);

    try {
      const response = await fetch(url, {
        ...config,
        headers: {
          ...this.config.headers,
          ...config.headers
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new ApiError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          response
        );
      }

      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * Parse response based on content type
   */
  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      return response.json();
    }
    
    if (contentType.includes('text/')) {
      return response.text() as T;
    }
    
    return response.blob() as T;
  }

  /**
   * Build full URL
   */
  private buildUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }
    
    const baseURL = this.config.baseURL.endsWith('/') 
      ? this.config.baseURL.slice(0, -1) 
      : this.config.baseURL;
    
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    
    return `${baseURL}${cleanUrl}`;
  }

  /**
   * Build cache key
   */
  private buildCacheKey(url: string, config: RequestInit): string {
    const method = config.method || 'GET';
    const body = config.body ? JSON.stringify(config.body) : '';
    return `${method}:${url}:${body}`;
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): ApiResponse<T> | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    // Check if expired
    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as ApiResponse<T>;
  }

  /**
   * Set data in cache
   */
  private setCache<T>(key: string, data: ApiResponse<T>, ttl?: number): void {
    const expiry = Date.now() + (ttl || this.config.cacheOptions.ttl);
    this.cache.set(key, { data, expiry });
  }

  /**
   * Delay utility
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): {
    size: number;
    maxSize: number;
  } {
    return {
      size: this.cache.size,
      maxSize: this.config.cacheOptions.maxSize
    };
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

export default ApiClient;