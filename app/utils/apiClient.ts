// Type definitions for API client
// RequestInit is a built-in TypeScript type for fetch options
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface RequestOptions extends globalThis.RequestInit {
  timeout?: number;
  retries?: number;
}

export class ApiClient {
  private baseURL: string;
  private defaultOptions: RequestOptions;

  constructor(baseURL = '', options: RequestOptions = {}) {
    this.baseURL = baseURL;
    this.defaultOptions = {
      timeout: 30000,
      retries: 3,
      ...options,
    };
  }

  private async makeRequest<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = 30000, retries: _retries = 3, ...fetchOptions } = {
      ...this.defaultOptions,
      ...options,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async get<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'GET',
      ...options,
    });
  }

  async post<T>(url: string, data?: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  async put<T>(url: string, data?: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  async patch<T>(url: string, data?: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
  }

  async delete<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'DELETE',
      ...options,
    });
  }
}

export default ApiClient;