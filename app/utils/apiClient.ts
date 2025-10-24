interface ApiResponse<T = any> {
<<<<<<< HEAD
  data: T;,
  status: number;,
=======
  data: T;
  statu,
  s: number;
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
  message?: string;
}

interface ApiError {
<<<<<<< HEAD
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
=======
  message: string;
  statu,
  s: number;}
}
;
class ApiClient {
  private baseURL: string;
  private defaultHeader,</T>
  s: Record<string, string>;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;,
    this.defaultHeaders = {,
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
      'Content-Type': 'application/json',
    };
  }
</string>
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}</T>
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {,
      ...options,
      headers: {,
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        data,
        status: response.status,
      };
    } catch(error) {
      throw {
        message: error instanceof Error ? error.message : 'Unknown error',
        status: 500,
      } as ApiError;
    }
  }
</ApiResponse>
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {</ApiResponse>
    return this.request<T>(endpoint, {
      method: 'GET',
      headers,
    });
  }
</T>
  async post<T>(
    endpoint: string,
<<<<<<< HEAD
    data?: any,
    headers?: Record<string, string>): Promise</string><ApiResponse<T>> {
=======
    data?: any,</T>
    headers?: Record<string, string />
  ): Promise<ApiResponse<T>> {</ApiResponse>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      headers,
    });
  }
</T>
  async put<T>(
    endpoint: string,
<<<<<<< HEAD
    data?: any,
    headers?: Record<string, string>): Promise</string><ApiResponse<T>> {
=======
    data?: any,</T>
    headers?: Record<string, string />
  ): Promise<ApiResponse<T>> {</ApiResponse>
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      headers,
    });
  }
</T>
  async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {</ApiResponse>
    return this.request<T>(endpoint, {
      method: 'DELETE',
      headers,
    });
  }
}

const apiClient = new ApiClient();

export default apiClient;
export { ApiClient, type ApiResponse, type ApiError };</T>
}