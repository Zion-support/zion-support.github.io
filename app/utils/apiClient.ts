'use client'
/**
 * API Client Utility
 * Provides a centralized way to make API calls with error handling and caching
 */

import { apiCache } from './apiCache';

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
    const cacheKey = `${method}:${url}:${JSON.stringify(body || {})}`;

    // Check cache for GET requests
    if (method === 'GET' && cache) {
      const cachedData = apiCache.get<T>(cacheKey);
      if (cachedData) {
        return {
          data: cachedData,
          status: 200
        };
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
    }
  }

  async get<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
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
  }
}

// Create singleton instance
export const apiClient = new APIClient();

export default APIClient;