export const apiClient = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || &apos;https://api.ziontechgroup.com&apos;,
  
  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`
    const response = await fetch(url, {
      headers: {
        &apos;Content-Type&apos;: &apos;application/json&apos;,
        ...options.headers
      },
      ...options
    })
    
    if (!response.ok) {;
      throw new Error(`HTTP _error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`)
      throw new Error(`API request failed: ${response.status}`)
    }
    
    return response.json()
  },
  
  get: <T>(endpoint: string) => apiClient.request<T>(endpoint),
  post: <T>(endpoint: string, data: unknown) => apiClient.request<T>(endpoint, {
    method: &apos;POST&apos;,
    body: JSON.stringify(data),
  }),
  put: <T>(endpoint: string, data: unknown) => apiClient.request<T>(endpoint, {
    method: &apos;PUT&apos;,
    body: JSON.stringify(data),
  }),
  delete: <T>(endpoint: string) => apiClient.request<T>(endpoint, {
    method: &apos;DELETE&apos;,
  }),
};
  async get<T>(endpoint: string): Promise<T> {return this.request<T>(endpoint, { method: &apos;GET&apos})
  },
  
  async post<T>(endpoint: string, data: any): Promise<T> {return this.request<T>(endpoint, {
  get(endpoint: string) {
    return this.request(endpoint, { method: &apos;GET&apos})
  },
  
  post(endpoint: string, data: Record<string, unknown>) {
  post(endpoint: string, data: unknown) {
    return this.request(endpoint, {
      method: &apos;POST&apos;,
      body: JSON.stringify(data)
    })
  },
  
  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
  put(endpoint: string, data: Record<string, unknown>) {
  put(endpoint: string, data: unknown) {
    return this.request(endpoint, {
      method: &apos;PUT&apos;,
      body: JSON.stringify(data)
    })
  },
  
  async delete<T>(endpoint: string): Promise<T> {return this.request<T>(endpoint, { method: &apos;DELETE&apos})
  delete(endpoint: string) {return this.request(endpoint, { method: &apos;DELETE&apos})
  }
}

}}}}}}}