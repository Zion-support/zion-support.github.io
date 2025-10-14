export const apiClient = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };
    
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },
  
  get: function<T>(endpoint: string) { return this.request<T>(endpoint); },
  post: function<T>(endpoint: string, data: any) { return this.request<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }); },
  put: function<T>(endpoint: string, data: any) { return this.request<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  }); },
  delete: function<T>(endpoint: string) { return this.request<T>(endpoint, {
    method: 'DELETE',
  }); },
};