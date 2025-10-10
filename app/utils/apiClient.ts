/**
 * API Client Utility;
 * Provides a centralized API client with error handling and caching;
 */

import { apiCache } from './apiCache';

interface RequestConfig {}
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  cache?: boolean;
  cacheTTL?: number;
}

interface APIResponse<T = any> {}
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

class APIClient {}
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '', defaultHeaders: Record<string, string> = {}) {}
    this.baseURL = baseURL;
    this.defaultHeaders = {}
      'Content-Type': 'application/json',
      ...defaultHeaders;
    };
  }

  private async makeRequest<T>(
    endpoint: string;
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {}
    const {}
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL;
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = apiCache.generateKey(url, body);

<<<<<<< HEAD
    // Check cache for GET requests;
    if (method === 'GET' && cache) {
=======
    // Check cache for GET requests
    if (method === 'GET' && cache) {}
>>>>>>> origin/merge-error-fixes
      const cachedData = apiCache.get(cacheKey);
      if (cachedData) {}
        return cachedData;
      }
    }

<<<<<<< HEAD
    try {
      const response = await fetch(url, {)
        method)
        headers: {,
          ...this.defaultHeaders),
          ...headers;
        })
        body: body ? JSON.stringify(body) : undefined;
      const data = await response.json();

      const apiResponse: APIResponse<T> = {
        data;
        status: response.status;
        statusText: response.statusText;
        headers: Object.fromEntries(response.headers.entries()),
      };

      // Cache successful GET requests;
      if (method === 'GET' && cache && response.ok) {
=======
    try {}
      const response = await fetch(url, {)}
        method,
        headers: {}
          ...this.defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined

      const data = await response.json();

      const apiResponse: APIResponse<T> = {}
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      };

      // Cache successful GET requests
      if (method === 'GET' && cache && response.ok) {}
>>>>>>> origin/merge-error-fixes
        apiCache.set(cacheKey, apiResponse, cacheTTL);
      }

      return apiResponse;
    } catch (error) {}
      throw new Error(`API request failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async get<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {}
    return this.makeRequest<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {}
    return this.makeRequest<T>(endpoint, { ...config, method: 'POST', body });
  }

  async put<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {}
    return this.makeRequest<T>(endpoint, { ...config, method: 'PUT', body });
  }

  async patch<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {}
    return this.makeRequest<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  async delete<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {}
    return this.makeRequest<T>(endpoint, { ...config, method: 'DELETE' });
  }

<<<<<<< HEAD
  // Set base URL;
  setBaseURL(baseURL: string): void {,
    this.baseURL = baseURL;
  }

  // Set default headers;
  setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

  // Clear cache;
  clearCache(): void {
=======
  // Set base URL
  setBaseURL(baseURL: string): void {}
    this.baseURL = baseURL;
  }

  // Set default headers
  setDefaultHeaders(headers: Record<string, string>): void {}
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

  // Clear cache
  clearCache(): void {}
>>>>>>> origin/merge-error-fixes
    apiCache.clear();
  }
}

// Create singleton instance;
export const apiClient = new APIClient();

export default APIClient;
