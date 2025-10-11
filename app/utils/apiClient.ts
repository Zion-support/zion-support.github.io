/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  cache?: boolean;
  cacheTTL?: number;
}

interface APIResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

class APIError extends Error {
  status?: number;
  code?: string;

  constructor({ message, status, code }: { message: string; status?: number; code?: string }) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.code = code;
  }
}

export class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
  }

  /**
   * Make an API request
   */
  async request<T = any>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL = 300000 // 5 minutes default
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `${method}:${url}:${JSON.stringify(body || {})}`;

    // Check cache first
    if (cache && method === 'GET') {
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      });

      const data = await response.json();

      const apiResponse: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: this.parseHeaders(response.headers)
      };

      // Cache successful GET requests
      if (cache && method === 'GET' && response.ok) {
        this.setCache(cacheKey, apiResponse, cacheTTL);
      }

      if (!response.ok) {
        throw new APIError({
          message: data.message || 'Request failed',
          status: response.status,
          code: data.code
        });
      }

      return apiResponse;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError({
        message: error instanceof Error ? error.message : 'Network error',
        code: 'NETWORK_ERROR'
      });
    }
  }

  /**
   * GET request
   */
  async get<T = any>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  /**
   * POST request
   */
  async post<T = any>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }

  /**
   * PUT request
   */
  async put<T = any>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }

  /**
   * DELETE request
   */
  async delete<T = any>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  /**
   * PATCH request
   */
  async patch<T = any>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  /**
   * Get data from cache
   */
  private getFromCache(key: string): APIResponse | null {
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
  private setCache(key: string, data: APIResponse, ttl: number): void {
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

// Export utility functions;
export const createAPIClient = (baseURL: string, headers?: Record<string, string>) => 
  new APIClient(baseURL, headers);

// Default API client instance;
export const apiClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || '/api');

// Export types and classes;
export type { RequestConfig, APIResponse };
export { APIError };