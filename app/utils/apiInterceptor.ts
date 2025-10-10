'use client';

/**
 * API Interceptor Utility
 * Centralized API request handling with error handling, retry logic, and caching
 */

// ErrorHandler class definition
class ErrorHandler {
  private static instance: ErrorHandler;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  handleNetworkError(error: Error, url: string, config?: unknown): void {
    console.error('Network Error:', {
      error: error.message,
      url,
      config,
      timestamp: new Date().toISOString()
    });
  }

  handleApiError(error: Error, response?: Response): void {
    console.error('API Error:', {
      error: error.message,
      status: response?.status,
      statusText: response?.statusText,
      timestamp: new Date().toISOString()
    });
  }
}

export interface APIConfig {
  baseURL: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  enableCaching: boolean;
  cacheTimeout: number;
  headers?: Record<string, string>;
  interceptors?: {
    request?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
    response?: (response: Response) => Response | Promise<Response>;
    error?: (error: Error) => Error | Promise<Error>;
  };
}

export interface RequestConfig {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  retries?: number;
  cache?: boolean;
}

export interface CacheEntry {
  data: any;
  timestamp: number;
  ttl: number;
}

export class APIClient {
  private config: APIConfig;
  private cache: Map<string, CacheEntry> = new Map();
  private errorHandler: ErrorHandler;

  constructor(config: Partial<APIConfig> = {}) {
    this.config = {
      baseURL: config.baseURL || '',
      timeout: config.timeout || 10000,
      retryAttempts: config.retryAttempts || 3,
      retryDelay: config.retryDelay || 1000,
      enableCaching: config.enableCaching !== false,
      cacheTimeout: config.cacheTimeout || 5 * 60 * 1000, // 5 minutes
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      },
      interceptors: config.interceptors
    };
    
    this.errorHandler = ErrorHandler.getInstance();
  }

  /**
   * Make a GET request
   */
  async get<T = any>(url: string, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>({ ...config, url, method: 'GET' });
  }

  /**
   * Make a POST request
   */
  async post<T = any>(url: string, data?: any, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>({
      ...config,
      url,
      method: 'POST',
      body: data
    });
  }

  /**
   * Make a PUT request
   */
  async put<T = any>(url: string, data?: any, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>({
      ...config,
      url,
      method: 'PUT',
      body: data
    });
  }

  /**
   * Make a DELETE request
   */
  async delete<T = any>(url: string, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>({ ...config, url, method: 'DELETE' });
  }

  /**
   * Make a PATCH request
   */
  async patch<T = any>(url: string, data?: any, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>({
      ...config,
      url,
      method: 'PATCH',
      body: data
    });
  }

  /**
   * Main request method with retry logic and caching
   */
  private async request<T>(config: RequestConfig): Promise<T> {
    const fullUrl = this.buildUrl(config.url);
    const cacheKey = this.buildCacheKey(fullUrl, config);

    // Check cache for GET requests
    if (config.method === 'GET' && this.config.enableCaching && config.cache !== false) {
      const cached = this.getFromCache<T>(cacheKey);
      if (cached) {
        return cached;
      }
    }

    // Apply request interceptor
    let processedConfig = config;
    if (this.config.interceptors?.request) {
      processedConfig = await this.config.interceptors.request(config);
    }

    // Make request with retry logic
    let lastError: Error | null = null;
    const retries = processedConfig.retries ?? this.config.retryAttempts;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await this.makeRequest(fullUrl, processedConfig);
        
        // Apply response interceptor
        let processedResponse = response;
        if (this.config.interceptors?.response) {
          processedResponse = await this.config.interceptors.response(response);
        }

        const data = await this.parseResponse<T>(processedResponse);

        // Cache successful GET requests
        if (config.method === 'GET' && this.config.enableCaching && config.cache !== false) {
          this.setCache(cacheKey, data);
        }

        return data;
      } catch (error) {
        lastError = error as Error;
        
        // Don't retry on the last attempt
        if (attempt === retries) {
          break;
        }

        // Apply error interceptor
        if (this.config.interceptors?.error) {
          lastError = await this.config.interceptors.error(lastError);
        }

        // Wait before retrying
        await this.delay(this.config.retryDelay * Math.pow(2, attempt));
      }
    }

    // Handle final error
    if (lastError) {
      this.errorHandler.handleApiError(lastError);
      throw lastError;
    }

    throw new Error('Request failed');
  }

  /**
   * Make the actual HTTP request
   */
  private async makeRequest(url: string, config: RequestConfig): Promise<Response> {
    const controller = new AbortController();
    const timeout = config.timeout || this.config.timeout;
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        method: config.method || 'GET',
        headers: {
          ...this.config.headers,
          ...config.headers
        },
        body: config.body ? JSON.stringify(config.body) : undefined,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      
      this.errorHandler.handleNetworkError(error as Error, url, config);
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
  private buildCacheKey(url: string, config: RequestConfig): string {
    const method = config.method || 'GET';
    const body = config.body ? JSON.stringify(config.body) : '';
    return `${method}:${url}:${body}`;
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    // Check if expired
    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as T;
  }

  /**
   * Set data in cache
   */
  private setCache<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: this.config.cacheTimeout
    });
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
    entries: string[];
  } {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}

// Create singleton instance
export const apiClient = new APIClient();

export default APIClient;