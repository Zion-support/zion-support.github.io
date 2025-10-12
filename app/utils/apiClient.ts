<<<<<<< HEAD
// API Client Utility
// Provides a centralized API client with error handling and caching

interface RequestConfig {
=======
export const apiClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || '/api');
export type { RequestConfig, APIResponse };
export { APIError };
/**
 * API Client Utility;
 * Provides a centralized API client with error handling and caching;
 */
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  cache?: boolean;
  cacheTTL?: number;
}
<<<<<<< HEAD

interface APIResponse<T = unknown> {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}
<<<<<<< HEAD

class APIError extends Error {
  status?: number;
  code?: string;

  constructor(message: string, status?: number, code?: string) {
=======
  status?: number;
  code?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.code = code;
  }
}
<<<<<<< HEAD

class APIClient {
  private baseURL: string;
<<<<<<< HEAD

=======
  private defaultHeaders: Record<string, string>;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number }> = new Map();
>>>>>>> cursor/fix-errors-and-merge-to-main-d941

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
=======
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number }> = new Map();
    <></>
  private defaultHeaders: Record<string, string />;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number } /> = new Map();
  private defaultHeaders: Record<string, string>;
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number }> = new Map();
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
  }
  /**
   * Make an API request
   */
<<<<<<< HEAD
  async request<T = unknown>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL = 300000 // 5 minutes default
=======
    config: RequestConfig = {};
      cacheTTL = 300000 // 5 minutes default;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
    } = config;
    const url = `${this.baseURL}${endpoint}`;
<<<<<<< HEAD
    const cacheKey = `${method}:${url}:${JSON.stringify(body || {})}`;

    // Check cache first
    if (cache && method === 'GET') {
=======
const cacheKey = `${method}:${url}:${JSON.stringify(body || {})}`;
    // Check cache first;
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        return cached as APIResponse<T>;
      }
    }
<<<<<<< HEAD

    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      });
      const data = await response.json();
<<<<<<< HEAD

      const apiResponse: APIResponse<T> = {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers: this.parseHeaders(response.headers)
      };

      // Cache successful GET requests
      if (cache && method === 'GET' && response.ok) {
        this.setCache(cacheKey, apiResponse, cacheTTL);
      }

      if (!response.ok) {
        throw new APIError(
          data.message || 'API request failed',
          response.status,
          data.code
        );
=======
        headers: this.parseHeaders(response.headers)
      };
      // Cache successful GET requests;
        this.setCache(cacheKey, apiResponse, cacheTTL);
      }
          code: data.code;
        });
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
      }
      return apiResponse;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError(
        'Network error occurred',
        0,
        'NETWORK_ERROR'
      );
    }
  }
  /**
   * GET request
   */
  async get<T = unknown>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }
  /**
   * POST request
   */
  async post<T = unknown>(endpoint: string, body?: unknown, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }
  /**
   * PUT request
   */
  async put<T = unknown>(endpoint: string, body?: unknown, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }
  /**
   * DELETE request
   */
  async delete<T = unknown>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
  /**
   * PATCH request
   */
  async patch<T = unknown>(endpoint: string, body?: unknown, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
  }
  /**
   * Get data from cache
   */
  private getFromCache(key: string): unknown | null {
    const cached = this.cache.get(key);
    if (!cached) return null;
    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }
    return cached.data;
  }
  /**
   * Set data in cache
   */
  private setCache(key: string, data: unknown, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }
  /**
   * Parse response headers
   */
  private parseHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {};
    headers.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }
  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }
  /**
   * Clear cache for specific endpoint
   */
  clearCacheForEndpoint(endpoint: string): void {
    const keysToDelete: string[] = [];
    this.cache.forEach((_, key) => {
      if (key.includes(endpoint)) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => this.cache.delete(key));
  }
}
<<<<<<< HEAD

// Export utility functions
export const createAPIClient = (baseURL: string, headers?: Record<string, string>) =>
  new APIClient(baseURL, headers);

// Default API client instance
export const apiClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || '/api');

// Export types and classes
export type { RequestConfig, APIResponse };
export { APIError };
=======
// Export utility functions;
  new APIClient(baseURL, headers);
// Default API client instance;
// Export types and classes;
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-a79b
