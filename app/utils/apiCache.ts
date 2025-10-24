// API client utility
export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: any
  cache?: boolean
  cacheTTL?: number
}

  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

  private baseURL: string
  private defaultHeaders: Record<string, string>

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  async request<T>(endpoint: string, config: RequestConfig = {}): Promise<APIResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    const headers = { ...this.defaultHeaders, ...config.headers }

    try {
      const response = await fetch(url, {
        method: config.method || 'GET',
        headers,
        body: config.body ? JSON.stringify(config.body) : undefined
      })

      const data = await response.json()

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      }
    } catch (error) {
      throw new Error(`API request failed: ${error}`)
    }
  }

  get<T>(endpoint: string, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' })
  }

  post<T>(endpoint: string, body: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body })
  }

  put<T>(endpoint: string, body: any, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body })
  }

  delete<T>(endpoint: string, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' })
  }
}

