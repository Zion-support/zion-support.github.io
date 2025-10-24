<<<<<<< HEAD
interface ApiResponse<T = any> {
  data: T;,
  status: number;,
  message?: string;
}

interface ApiError {
  message: string;,
  status: number;,
}
;
=======
// API Client for making HTTP requests
interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData;
  timeout?: number;
}

interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

>>>>>>> cursor/fix-errors-and-merge-to-main-8836
class ApiClient {
  private baseURL: string;,
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = '/api') {,
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
<<<<<<< HEAD
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
      }

      const data = await response.json();
      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries()),
      };
<<<<<<< HEAD
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  async get<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
<<<<<<< HEAD
<<<<<<< HEAD
      method: 'GET'
      ...options
    })
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
      method: 'GET',
      ...options,
    });
  }
<<<<<<< HEAD
</T>
  async post<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>): Promise</string><ApiResponse<T>> {
    return this.request<T>(endpoint, {
=======

  async post<T>(url: string, data: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  }
<<<<<<< HEAD
</T>
  async put<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>): Promise</string><ApiResponse<T>> {
    return this.request<T>(endpoint, {
=======

  async put<T>(url: string, data: unknown, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  }

  async delete<T>(url: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(`${this.baseURL}${url}`, {
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

<<<<<<< HEAD
export default ApiClient;
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
=======
export default ApiClient;
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
