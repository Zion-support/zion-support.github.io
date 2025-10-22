'use client'

// API Client utility functions
export interface ApiClientConfig {
  baseURL: string
  timeout: number
  headers: Record<string, string>
}

export interface ApiResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

class ApiClient {
  private config: ApiClientConfig

  constructor(config: Partial<ApiClientConfig> = {}) {
    this.config = {
      baseURL: process.env.NEXT_PUBLIC_API_URL || '',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers
      },
      ...config
    }
  }

  async get<T>(url: string, config?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...config, method: 'GET' })
  }

  async post<T>(url: string, data?: any, config?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined
    })
  }

  async put<T>(url: string, data?: any, config?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined
    })
  }

  async delete<T>(url: string, config?: RequestInit): Promise<ApiResponse<T>> {
    return this.request<T>(url, { ...config, method: 'DELETE' })
  }

  private async request<T>(url: string, config: RequestInit): Promise<ApiResponse<T>> {
    const fullUrl = url.startsWith('http') ? url : `${this.config.baseURL}${url}`
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

    try {
      const response = await fetch(fullUrl, {
        ...config,
        headers: {
          ...this.config.headers,
          ...config.headers
        },
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      const data = await response.json()

      return {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      }
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }
}

// Create default instance
export const apiClient = new ApiClient()

export default apiClient
