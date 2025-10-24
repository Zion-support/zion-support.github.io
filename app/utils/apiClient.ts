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
</T>
  async post<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>): Promise</string><ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
>>>>>>> 5f2517e6a8f3 (Fix merge conflicts and syntax errors)
  }
</T>
  async put<T>(
    endpoint: string,
    data?: any,
    headers?: Record<string, string>): Promise</string><ApiResponse<T>> {
    return this.request<T>(endpoint, {
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
