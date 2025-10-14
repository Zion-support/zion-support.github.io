export const apiClient = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com',
  
  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }
    
    return response.json()
  },
  
  get(endpoint: string) {
    return this.request(endpoint, { method: 'GET' })
  },
  
  post(endpoint: string, data: Record<string, unknown>) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  },
  
  put(endpoint: string, data: Record<string, unknown>) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  },
  
  delete(endpoint: string) {
    return this.request(endpoint, { method: 'DELETE' })
  }
}