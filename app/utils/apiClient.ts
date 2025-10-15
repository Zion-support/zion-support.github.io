export const apiClient = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },
  
  get: <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    return apiClient.request<T>(endpoint, { ...options, method: 'GET' });
  },
  
  post: <T>(endpoint: string, data: unknown, options: RequestInit = {}): Promise<T> => {
    return apiClient.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  
  put: <T>(endpoint: string, data: unknown, options: RequestInit = {}): Promise<T> => {
    return apiClient.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  
  delete: <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    return apiClient.request<T>(endpoint, { ...options, method: 'DELETE' });
  },
};