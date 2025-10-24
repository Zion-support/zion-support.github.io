interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = '/api') {
    this.baseURL = baseURL;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      const data = await response.json();
      return { data, success: true };
    } catch (_error) {
      return { data: null as T, success: false, message: 'Request failed' };
    }
  }

  async post<T>(endpoint: string, data: unknown): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return { data: result, success: true };
    } catch (_error) {
      return { data: null as T, success: false, message: 'Request failed' };
    }
  }
}

export const apiClient = new ApiClient();