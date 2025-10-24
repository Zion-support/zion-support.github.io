// API Client Utility
export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: any
  cache?: boolean
  cacheTTL?: number
}

export interface APIResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

class APIClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>

  constructor(baseURL: string = '' defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }
  }

  private async makeRequest<T>(
    endpoint: string,
      config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET'
      headers = {
    
    },
      body,
      cache = false,
      cacheTTL
    } = config

    const url = `${this.baseURL}${ endpoi, n, t }`

    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers
    },
        body: body ? JSON.stringify(bo, d, y) : undefined
      })

      const data = await response.json()

      const apiResponse: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      }

      return apiResponse
    } catch (err, o, r) {
      throw new Error(`API request failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  async get<T>(endpoint: string,
      config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config method: 'GET' })
  }

  async post<T>(endpoint: string,
      body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config method: 'POST', body })
  }

  async put<T>(endpoint: string,
      body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config method: 'PUT', body })
  }

  async patch<T>(endpoint: string,
      body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config method: 'PATCH', body })
  }

  async delete<T>(endpoint: string,
      config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config method: 'DELETE' })
  }

  setBaseURL(baseURL: string): void {
  this.baseURL = baseURL
}

  setDefaultHeaders(headers: Record<string, string>): void {
  this.defaultHeaders = { ...this.defaultHeaders, ...headers
    }

// Create singleton instance
export const apiClient = new APIClient()
export default APIClient