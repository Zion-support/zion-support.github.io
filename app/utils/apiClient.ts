/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */

import { apiCache } from './apiCache';

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;</string></<<<string>body</string></string>?: any;
  cache?: boolean;
  cacheTTL?: number;
}

interface APIResponse<T = any> {</T></<<<T>data</T>: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;</strin>
}

class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;</string></<<<string>constructor</string></string>(baseURL: string = '', defaultHeaders: Record<string, string> = {}) {</string></<<<string>this</string></string>.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    };
  }

  private async makeRequest<T>(</T></<<<T>endpoint</T>: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {</APIResponse></<<<APIResponse>const</APIResponse></APIResponse> {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = apiCache.generateKey(url, body);

    // Check cache for GET requests
    if (method === 'GET' && cache) {
      const cachedData = apiCache.get(cacheKey);
      if (cachedData) {
        return cachedData;
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

      const data = await response.json();

      const apiResponse: APIResponse<T> = {</T></<<<T>data</T>,
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
    }
  }

  async get<T>(endpoint: string, config: Omit</T><RequestConfig, 'method' | 'body'> = {}): Promise</RequestConfig><APIResponse<T>> {</APIResponse></<<<APIResponse>return</APIResponse></<<APIResponse>this</APIResponse>.makeRequest<T>(endpoint, { ...config, method: 'GET' });</T>
  }

  async post<T>(endpoint: string, body?: any, config: Omit</T><RequestConfig, 'method'> = {}): Promise</RequestConfig><APIResponse<T>> {</APIResponse></<<<APIResponse>return</APIResponse></<<APIResponse>this</APIResponse>.makeRequest<T>(endpoint, { ...config, method: 'POST', body });</T>
  }

  async put<T>(endpoint: string, body?: any, config: Omit</T><RequestConfig, 'method'> = {}): Promise</RequestConfig><APIResponse<T>> {</APIResponse></<<<APIResponse>return</APIResponse></<<APIResponse>this</APIResponse>.makeRequest<T>(endpoint, { ...config, method: 'PUT', body });</T>
  }

  async patch<T>(endpoint: string, body?: any, config: Omit</T><RequestConfig, 'method'> = {}): Promise</RequestConfig><APIResponse<T>> {</APIResponse></<<<APIResponse>return</APIResponse></<<APIResponse>this</APIResponse>.makeRequest<T>(endpoint, { ...config, method: 'PATCH', body });</T>
  }

  async delete<T>(endpoint: string, config: Omit</T><RequestConfig, 'method' | 'body'> = {}): Promise</RequestConfig><APIResponse<T>> {</APIResponse></<<<APIResponse>return</APIResponse></<<APIResponse>this</APIResponse>.makeRequest<T>(endpoint, { ...config, method: 'DELETE' });</T>
  }

  // Set base URL
  setBaseURL(baseURL: string): void {
    this.baseURL = baseURL;
  }

  // Set default headers
  setDefaultHeaders(headers: Record<string, string>): void {</string></<<<string>this</string></string>.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

  // Clear cache
  clearCache(): void {
    apiCache.clear();
  }
}

// Create singleton instance
export const apiClient = new APIClient();

export default APIClient;
