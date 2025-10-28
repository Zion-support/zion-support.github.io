// API Client utility for making HTTP requests

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  success: boolean;
  error?: string;
}

export interface ApiOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
  retries?: number;
}

class ApiClient {
  private baseURL: string;
  private defaultOptions: ApiOptions;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
    this.defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
      retries: 3,
    };
  }

  // Generic request method
  async request<T = any>(
    endpoint: string,
    options: ApiOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const config = { ...this.defaultOptions, ...options };

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...config.headers,
        },
        ...config,
      });

      const data = await response.json();

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        success: response.ok,
        error: response.ok ? undefined : data.message || 'Request failed',
      };
    } catch (error) {
      return {
        data: null as any,
        status: 0,
        statusText: 'Network Error',
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // GET request
  async get<T = any>(endpoint: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  // POST request
  async post<T = any>(endpoint: string, data?: any, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T = any>(endpoint: string, data?: any, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T = any>(endpoint: string, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  // PATCH request
  async patch<T = any>(endpoint: string, data?: any, options?: ApiOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
}

// Create API client instance
const apiClient = new ApiClient();

export default apiClient;