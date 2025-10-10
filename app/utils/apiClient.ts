<<<<<<< HEAD
=======
'use client';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
/**
<<<<<<< HEAD
 * API Client
 * Centralized API client with caching and error handling
=======
 * API Client Utility
 * Provides a centralized way to make API calls with error handling and caching
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
 */
<<<<<<< HEAD

import { apiCache } from './apiCache';

<<<<<<< HEAD
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
  data?: any;
}

class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = process.env.VITE_API_BASE_URL || 'https://api.ziontechgroup.com') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
<<<<<<< HEAD
      ...defaultHeaders
    };
  }

  private async makeRequest<T>(
=======
export interface APIResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface APIError {
  message: string;
  status: number;
  code?: string;
}

export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  cache?: boolean;
  cacheTTL?: number;
}

class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T>(
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL
    } = config;

    const url = `${this.baseURL}${endpoint}`;
<<<<<<< HEAD
    const cacheKey = apiCache.generateKey(url, body);

    // Check cache for GET requests
    if (method === 'GET' && cache) {
      const cachedData = apiCache.get(cacheKey);
      if (cachedData) {
        return cachedData;
=======
    };
  }

  /**
   * Make a GET request
   */
  async get<T>(url: string, options?: RequestInit & { cache?: boolean; ttl?: number }): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url);
    
    // Check cache first
    if (options?.cache !== false) {
      const cached = apiCache.get<T>(fullUrl, options);
      if (cached) {
        return {
          data: cached.data,
          status: 200,
          statusText: 'OK',
          headers: cached.headers || {},
        };
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
    const cacheKey = `${method}:${url}:${JSON.stringify(body || {})}`;

    // Check cache for GET requests
    if (method === 'GET' && cache) {
      const cachedData = apiCache.get<T>(cacheKey);
      if (cachedData) {
        return {
          data: cachedData,
          status: 200
        };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
      }
    }

    try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
<<<<<<< HEAD
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
=======
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
      });

      const data = await response.json();

<<<<<<< HEAD
      const apiResponse: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      };

      // Cache successful GET requests
      if (method === 'GET' && cache && response.ok) {
        apiCache.set(cacheKey, apiResponse, cacheTTL);
      }

      return apiResponse;
    } catch (error) {
      throw new Error(`API request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
=======
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      // Cache successful GET requests
      if (method === 'GET' && cache) {
        apiCache.set(cacheKey, data, cacheTTL);
      }

      return {
        data,
        status: response.status
      };
    } catch (error) {
      throw {
        message: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
        code: 'NETWORK_ERROR'
      } as APIError;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
    }
  }

  async get<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
<<<<<<< HEAD
    return this.makeRequest<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'POST', body });
  }

  async put<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PUT', body });
  }

  async patch<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  async delete<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'DELETE' });
  }

  // Set base URL
  setBaseURL(baseURL: string): void {
    this.baseURL = baseURL;
  }

  // Set default headers
=======
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: { ...this.defaultHeaders, ...options?.headers },
        ...options,
      });

      const data = await response.json();
      const result: ApiResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: this.extractHeaders(response),
      };

      // Cache successful responses
      if (response.ok && options?.cache !== false) {
        apiCache.set(fullUrl, data, { ttl: options.ttl });
      }

      return result;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Make a POST request
   */
  async post<T>(url: string, data?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url);

    try {
      const response = await fetch(fullUrl, {
        method: 'POST',
        headers: { ...this.defaultHeaders, ...options?.headers },
        body: data ? JSON.stringify(data) : undefined,
        ...options,
      });

      const responseData = await response.json();
      return {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: this.extractHeaders(response),
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Make a PUT request
   */
  async put<T>(url: string, data?: any, options?: RequestInit): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url);

    try {
      const response = await fetch(fullUrl, {
        method: 'PUT',
        headers: { ...this.defaultHeaders, ...options?.headers },
        body: data ? JSON.stringify(data) : undefined,
        ...options,
      });

      const responseData = await response.json();
      return {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: this.extractHeaders(response),
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Make a DELETE request
   */
  async delete<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
    const fullUrl = this.buildUrl(url);

    try {
      const response = await fetch(fullUrl, {
        method: 'DELETE',
        headers: { ...this.defaultHeaders, ...options?.headers },
        ...options,
      });

      const responseData = await response.json();
      return {
        data: responseData,
        status: response.status,
        statusText: response.statusText,
        headers: this.extractHeaders(response),
      };
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Build full URL
   */
  private buildUrl(url: string): string {
    if (url.startsWith('http')) {
      return url;
    }
    return `${this.baseURL}${url.startsWith('/') ? url : `/${url}`}`;
  }

  /**
   * Extract headers from response
   */
  private extractHeaders(response: Response): Record<string, string> {
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    return headers;
  }

  /**
   * Handle API errors
   */
  private handleError(error: any): ApiError {
    if (error instanceof Error) {
      return {
        message: error.message,
        status: 0,
        statusText: 'Network Error',
      };
    }

    return {
      message: 'An unexpected error occurred',
      status: error.status || 500,
      statusText: error.statusText || 'Internal Server Error',
      data: error.data,
    };
  }

  /**
   * Set default headers
   */
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
  setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

<<<<<<< HEAD
  // Clear cache
  clearCache(): void {
    apiCache.clear();
=======
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }

  async put<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }

  async delete<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  async patch<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
  }
}

// Create singleton instance
export const apiClient = new APIClient();

<<<<<<< HEAD
export default APIClient;
=======
  /**
   * Set base URL
   */
  setBaseURL(url: string): void {
    this.baseURL = url;
  }
}

export const apiClient = new ApiClient();
export default apiClient;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1595
=======
export default APIClient;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
=======

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a367
