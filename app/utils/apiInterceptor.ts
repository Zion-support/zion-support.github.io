/**
 * API Interceptor Utility
 * Provides request/response interceptors for API calls
 */

<<<<<<< HEAD
interface InterceptorConfig {
  onRequest?: (config: any) => any;
  onResponse?: (response: any) => any;
  onError?: (error: any) => any;
}

class APIInterceptor {
  private requestInterceptors: Array<(config: any) => any> = [];
  private responseInterceptors: Array<(response: any) => any> = [];
  private errorInterceptors: Array<(error: any) => any> = [];

  // Add request interceptor
  addRequestInterceptor(interceptor: (config: any) => any): void {
    this.requestInterceptors.push(interceptor);
  }

  // Add response interceptor
  addResponseInterceptor(interceptor: (response: any) => any): void {
    this.responseInterceptors.push(interceptor);
  }

  // Add error interceptor
  addErrorInterceptor(interceptor: (error: any) => any): void {
    this.errorInterceptors.push(interceptor);
  }

  // Remove request interceptor
  removeRequestInterceptor(interceptor: (config: any) => any): void {
    const index = this.requestInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.requestInterceptors.splice(index, 1);
    }
  }

  // Remove response interceptor
  removeResponseInterceptor(interceptor: (response: any) => any): void {
    const index = this.responseInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.responseInterceptors.splice(index, 1);
    }
  }

  // Remove error interceptor
  removeErrorInterceptor(interceptor: (error: any) => any): void {
    const index = this.errorInterceptors.indexOf(interceptor);
    if (index > -1) {
      this.errorInterceptors.splice(index, 1);
    }
  }

  // Apply request interceptors
  applyRequestInterceptors(config: any): any {
    return this.requestInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (error) {
        console.warn('Request interceptor error:', error);
        return acc;
      }
    }, config);
  }

  // Apply response interceptors
  applyResponseInterceptors(response: any): any {
    return this.responseInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (error) {
        console.warn('Response interceptor error:', error);
        return acc;
      }
    }, response);
  }

  // Apply error interceptors
  applyErrorInterceptors(error: any): any {
    return this.errorInterceptors.reduce((acc, interceptor) => {
      try {
        return interceptor(acc);
      } catch (interceptorError) {
        console.warn('Error interceptor error:', interceptorError);
        return acc;
      }
    }, error);
  }

  // Clear all interceptors
  clearAll(): void {
    this.requestInterceptors = [];
    this.responseInterceptors = [];
    this.errorInterceptors = [];
  }

  // Get interceptor counts
  getInterceptorCounts(): {
    request: number;
    response: number;
    error: number;
  } {
    return {
      request: this.requestInterceptors.length,
      response: this.responseInterceptors.length,
      error: this.errorInterceptors.length
    };
=======
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
    console.error('Network error:', {
      error: error.message,
      url,
      config,
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

export class APIInterceptor {
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
    return this.request<T>(url, { ...config, method: 'GET' });
  }

  /**
   * Make a POST request
   */
  async post<T = any>(url: string, data?: any, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>(url, { ...config, method: 'POST', body: data });
  }

  /**
   * Make a PUT request
   */
  async put<T = any>(url: string, data?: any, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>(url, { ...config, method: 'PUT', body: data });
  }

  /**
   * Make a DELETE request
   */
  async delete<T = any>(url: string, config: Partial<RequestConfig> = {}): Promise<T> {
    return this.request<T>(url, { ...config, method: 'DELETE' });
  }

  /**
   * Main request method
   */
  async request<T = any>(url: string, config: Partial<RequestConfig> = {}): Promise<T> {
    const fullConfig: RequestConfig = {
      url: this.buildUrl(url),
      method: 'GET',
      headers: { ...this.config.headers, ...config.headers },
      body: config.body,
      timeout: config.timeout || this.config.timeout,
      retries: config.retries || this.config.retryAttempts,
      cache: config.cache !== false && this.config.enableCaching
    };

    // Apply request interceptor
    if (this.config.interceptors?.request) {
      const interceptedConfig = await this.config.interceptors.request(fullConfig);
      Object.assign(fullConfig, interceptedConfig);
    }

    // Check cache first
    if (fullConfig.cache) {
      const cached = this.getFromCache<T>(this.getCacheKey(fullConfig));
      if (cached) {
        return cached;
      }
    }

    let lastError: Error | null = null;
    const maxRetries = fullConfig.retries || 0;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const response = await this.executeRequest(fullConfig);
        
        // Apply response interceptor
        if (this.config.interceptors?.response) {
          const interceptedResponse = await this.config.interceptors.response(response);
          const data = await this.parseResponse<T>(interceptedResponse);
          
          // Cache successful responses
          if (fullConfig.cache && response.ok) {
            this.setCache(this.getCacheKey(fullConfig), data);
          }
          
          return data;
        }
        
        const data = await this.parseResponse<T>(response);
        
        // Cache successful responses
        if (fullConfig.cache && response.ok) {
          this.setCache(this.getCacheKey(fullConfig), data);
        }
        
        return data;
      } catch (error) {
        lastError = error as Error;
        
        // Apply error interceptor
        if (this.config.interceptors?.error) {
          const interceptedError = await this.config.interceptors.error(error as Error);
          if (interceptedError !== error) {
            throw interceptedError;
          }
        }
        
        this.errorHandler.handleNetworkError(error as Error, fullConfig.url, fullConfig);
        
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
  private async executeRequest(config: RequestConfig): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout || this.config.timeout);

    try {
      const response = await fetch(config.url, {
        method: config.method,
        headers: config.headers,
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
      throw error;
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
  private getCacheKey(config: RequestConfig): string {
    const method = config.method || 'GET';
    const body = config.body ? JSON.stringify(config.body) : '';
    return `${method}:${config.url}:${body}`;
  }

  /**
   * Get data from cache
   */
  private getFromCache<T>(key: string): T | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    if (Date.now() - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }

    return cached.data as T;
  }

  /**
   * Set data in cache
   */
  private setCache(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: this.config.cacheTimeout
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
    const fullConfig: RequestConfig = {
      url: this.buildUrl(url),
      method: config.method || 'GET',
      headers: config.headers,
      body: config.body,
      timeout: config.timeout,
      retries: config.retries,
      cache: config.cache
    };
    
    const key = this.getCacheKey(fullConfig);
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
      maxSize: 1000, // Default max size
      ttl: this.config.cacheTimeout
    };
  }

  /**
   * Utility delay function
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
>>>>>>> cursor/fix-errors-and-merge-to-main-7c55
  }
}

// Create singleton instance
export const apiInterceptor = new APIInterceptor();

export default APIInterceptor;