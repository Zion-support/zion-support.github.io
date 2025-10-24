<<<<<<< HEAD
// Type definitions for API client
// RequestInit is a built-in TypeScript type for fetch options
export interface ApiResponse<T = unknown> {
  data: T,
      status: number,
      statusText: string,
      headers: Record<string, string>
=======
// API Client for making HTTP requests
interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData;
  timeout?: number;
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
}

interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

<<<<<<< HEAD
export class ApiClient {
  private baseURL: string
  private defaultOptions: RequestOptions
  constructor(baseURL = '', options: RequestOptions = {}) {
    this.baseURL = baseURL
    this.defaultOptions = {
      timeout: 30000,
      retries: 3
      ...options
    }
  }

  private async makeRequest<T>(
    url: string,
      options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = 30000, retries: _retries = 3, ...fetchOptions } = {
      ...this.defaultOptions
      ...options
    }
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)
    try {
      const response = await fetch(url, {
        ...fetchOptions
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
=======
class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '/api', defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    };
  }

  private async makeRequest<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), options.timeout || 10000);

    try {
      const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
          ...this.defaultHeaders,
          ...options.headers,
        },
        body: options.body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
      }

      const data = await response.json();
      return {
<<<<<<< HEAD
        data
        status: response.status
        statusText: response.statusText
        headers: Object.fromEntries(response.headers.entries())
      }
=======
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async get<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
<<<<<<< HEAD
      method: 'GET'
      ...options
    })
=======
      method: 'GET',
      ...options,
    });
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
  }

  async post<T>(url: string, data: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
<<<<<<< HEAD
      method: 'POST'
      headers: {
        'Content-Type': 'application/json'
        ...options.headers
          }
      body: data ? JSON.stringify(data) : undefined
      ...options
    })
=======
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
  }

  async put<T>(url: string, data: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
<<<<<<< HEAD
      method: 'PUT'
      headers: {
        'Content-Type': 'application/json'
        ...options.headers
          }
      body: data ? JSON.stringify(data) : undefined
      ...options
    })
  }

  async patch<T>(url: string, data?: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'PATCH'
      headers: {
        'Content-Type': 'application/json'
        ...options.headers
          }
      body: data ? JSON.stringify(data) : undefined
      ...options
    })
=======
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
  }

  async delete<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
<<<<<<< HEAD
      method: 'DELETE'
      ...options
    })
  }
}

export default ApiClient
=======
      method: 'DELETE',
      ...options,
    });
  }

  async patch<T>(url: string, data: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options,
    });
  }
}

export default ApiClient;
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
