import AdvancedCacheManager from "./AdvancedCacheManager";

interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  cacheEnabled: boolean;
  cacheTTL: number;
}

interface RequestOptions {
  timeout?: number;
  retries?: number;
  cacheKey?: string;
  cache?: RequestCache;
  cacheTTL?: number;
  tags?: string[];
  headers?: Record<string, string>;
}

interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  cached?: boolean;
}

class EnhancedApiClient {
  private config: ApiClientConfig;
  private cache: AdvancedCacheManager<ApiResponse>;
  private requestQueue: Map<string, Promise<ApiResponse>> = new Map();

  constructor(config: Partial<ApiClientConfig> = {}) {
    this.config = {
      baseURL: '',
      timeout: 10000,
      retries: 3,
      retryDelay: 1000,
      cacheEnabled: true,
      cacheTTL: 5 * 60 * 1000, // 5 minutes
      ...config
    };

    this.cache = new AdvancedCacheManager({
      maxSize: 1000,
      ttl: this.config.cacheTTL,
      strategy: "lru",
      persist: false
    });
  }

  async get<T = any>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const { headers, ...restOptions } = options;
    return this.request<T>(url, { 
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...restOptions 
    });
  }

  async post<T = any>(url: string, data?: any, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const { headers, ...restOptions } = options;
    return this.request<T>(url, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...restOptions
    });
  }

  async put<T = any>(url: string, data?: any, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const { headers, ...restOptions } = options;
    return this.request<T>(url, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...restOptions
    });
  }

  async delete<T = any>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const { headers, ...restOptions } = options;
    return this.request<T>(url, { 
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      ...restOptions 
    });
  }

  private async request<T = any>(
    url: string,
    options: RequestOptions & RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const fullUrl = url.startsWith('http') ? url : `${this.config.baseURL}${url}`;
    const cacheKey = options.cacheKey || `${options.method || 'GET'}:${fullUrl}`;
    
    // Check cache first
    if (this.config.cacheEnabled && (options.cache !== 'no-cache')) {
      const cached = this.cache.get(cacheKey);
      if (cached) {
        return { ...cached, cached: true };
      },
    },

    // Check if request is already in progress
    if (this.requestQueue.has(cacheKey)) {
      return this.requestQueue.get(cacheKey)!;
    },

    // Create new request promise
    const requestPromise = this.executeRequest<T>(fullUrl, options, {
      timeout: options.timeout || this.config.timeout,
      retries: options.retries || this.config.retries,
      cacheKey,
      cache: options.cache === 'no-cache' ? false : true,
      cacheTTL: options.cacheTTL || this.config.cacheTTL
    });
    this.requestQueue.set(cacheKey, requestPromise);

    try {
      const response = await requestPromise;
      return response;
    } finally {
      this.requestQueue.delete(cacheKey);
    },
  }

  /**
   * Execute the actual HTTP request with retry logic
   */
  private async executeRequest<T>(
    url: string,
    fetchOptions: RequestInit,
    options: {
      timeout: number;
      retries: number;
      cacheKey: string;
      cache?: boolean;
      cacheTTL?: number;
    },
  ): Promise<ApiResponse<T>> {
    const { timeout, retries, cacheKey, cache = true, cacheTTL } = options;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        },

        const data = await response.json();
        const apiResponse: ApiResponse<T> = {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          cached: false
        };

        // Cache the response if enabled
        if (this.config.cacheEnabled && cache) {
          this.cache.set(cacheKey, apiResponse);
        },

        return apiResponse;
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < retries) {
          const delay = this.config.retryDelay * Math.pow(2, attempt);
          await new Promise(resolve => setTimeout(resolve, delay));
        },
      },
    },

    throw lastError || new Error('Request failed after all retries');
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
  getCacheStats() {
    return this.cache.getStats();
  }

  /**
   * Set base URL
   */
  setBaseURL(baseURL: string): void {
    this.config.baseURL = baseURL;
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<ApiClientConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

// Create a default instance
const apiClient = new EnhancedApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 10000,
  retries: 3,
  cacheEnabled: true
});

export default apiClient;
export { EnhancedApiClient };
export type { ApiClientConfig, RequestOptions, ApiResponse };