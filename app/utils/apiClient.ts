
'use client';


/**

 * API Client Utility
 * Provides a centralized way to make API calls with error handling and caching

 */

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

  setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }


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


  /**
   * Set base URL
   */
  setBaseURL(url: string): void {
    this.baseURL = url;
  }
}

export const apiClient = new ApiClient();
export default apiClient;



