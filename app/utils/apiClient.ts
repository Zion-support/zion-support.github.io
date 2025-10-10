/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */

import { apiCache } from './apiCache';

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

class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async makeRequest<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL = 300000, // 5 minutes default
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `${method}:${url}`;

    // Check cache first
    if (cache && method === 'GET') {
      const cached = apiCache.get(cacheKey);
      if (cached) {
        return cached;
      }
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      const data = await response.json();

      const result: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };

      // Cache successful GET requests
      if (cache && method === 'GET' && response.ok) {
        apiCache.set(cacheKey, result, cacheTTL);
      }

      return result;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async get<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.makeRequest<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.makeRequest<T>(endpoint, { ...config, method: 'POST', body });
  }

  async put<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PUT', body });
  }

  async delete<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.makeRequest<T>(endpoint, { ...config, method: 'DELETE' });
  }

  async patch<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method' | 'body'> = {}) {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PATCH', body });
  }
}

export const apiClient = new APIClient();
export default apiClient;