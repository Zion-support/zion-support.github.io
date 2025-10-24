// Type definitions for fetch API
type HeadersInit = Headers | string[][] | Record<string, string>;
type BodyInit = Blob | ArrayBuffer | ArrayBufferView | FormData | URLSearchParams | string;
type RequestMode = 'cors' | 'navigate' | 'no-cors' | 'same-origin';
type RequestCredentials = 'include' | 'omit' | 'same-origin';
type RequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload';
type RequestRedirect = 'error' | 'follow' | 'manual';
type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';

interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: null;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface RequestOptions extends RequestInit {
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