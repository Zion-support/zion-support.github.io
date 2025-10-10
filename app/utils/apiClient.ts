'use client'
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
    storage?: 'memory' | 'localStorage' | 'sessionStorage';
  };
}

export interface RequestConfig extends Omit<RequestInit, 'cache'> {
  url: string;
  cacheOptions?: {
    ttl?: number;
    maxSize?: number;
    storage?: 'memory' | 'localStorage' | 'sessionStorage';
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
        ttl: 5 * 60 * 1000, // 5 minutes
        maxSize: 100,
        storage: 'memory',
        ...config.cacheOptions
      }
    };
  }

  /**
   * Make a GET request
   */
  async get<T = unknown>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...config, method: 'GET' });
  }

  /**
   * Make a POST request
   */
  async post<T = unknown>(url: string, data?: unknown, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a PUT request
   */
  async put<T = unknown>(url: string, data?: unknown, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a DELETE request
   */
  async delete<T = unknown>(url: string, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...config, method: 'DELETE' });
  }

  /**
   * Make a PATCH request
   */
  async patch<T = unknown>(url: string, data?: unknown, config?: Partial<RequestConfig>): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Main request method with retry logic and caching
   */
  async request<T = unknown>(url: string, config: Partial<RequestConfig> = {}): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url);
    const cacheKey = this.getCacheKey(fullUrl, config);
    
    // Check cache first
    if (!config.skipCache) {
      const cached = this.getFromCache<T>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    const requestConfig: RequestConfig = {
      url: fullUrl,
      ...config,
      headers: {
        ...this.config.headers,
        ...config.headers
      }
    };

    let lastError: Error | null = null;
    const maxRetries = config.retries ?? this.config.retries;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await this.executeRequest<T>(requestConfig);
        
        // Cache successful responses
        if (!config.skipCache && response.status < 400) {
          this.setCache(cacheKey, response);
        }
        
        return response;
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < maxRetries) {
          const delay = this.config.retryDelay * Math.pow(2, attempt);
          await this.delay(delay);
        }
      }
    }

    throw lastError || new Error('Request failed after all retries');
  }

  /**
   * Execute the actual request
   */
  private async executeRequest<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout || this.config.timeout);

    try {
      const response = await fetch(config.url, {
        ...config,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new ApiError(
          `Request failed with status ${response.status}`,
          response.status,
          await this.parseResponse(response)
        );
      }

      const data = await this.parseResponse<T>(response);

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      };
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof ApiError) {
        throw error;
      }
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ApiError('Request timeout', 408);
      }
      
      throw new ApiError(error instanceof Error ? error.message : 'Unknown error', 0);
    }
  }

  /**
   * Parse response based on content type
   */
  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      return response.json();
    }
    
    if (contentType?.includes('text/')) {
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
   * Generate cache key
   */
  private getCacheKey(url: string, config: Partial<RequestConfig>): string {
    const method = config.method || 'GET';
    const body = config.body ? JSON.stringify(config.body) : '';
    return `${method}:${url}:${body}`;
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): ApiResponse<T> | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() > cached.expiry) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as ApiResponse<T>;
  }

  /**
   * Set data in cache
   */
  private setCache(key: string, data: ApiResponse<any>): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + this.config.cacheOptions.ttl
    });
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Remove specific key from cache
   */
  deleteFromCache(url: string, config: Partial<RequestConfig> = {}): boolean {
    const key = this.getCacheKey(url, config);
    return this.cache.delete(key);
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): {
    size: number;
    maxSize: number;
    ttl: number;
  } {
    return {
      size: this.cache.size,
      maxSize: this.config.cacheOptions.maxSize,
      ttl: this.config.cacheOptions.ttl
    };
  }

  /**
   * Utility delay function
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Create singleton instance
export const apiClient = new ApiClient();

export default ApiClient;