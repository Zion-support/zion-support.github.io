/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */
import { apiCache } from './apiCache'

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: any
  cache?: boolean
  cacheTTL?: number
}

interface APIResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Headers
}

interface APIError {
  message: string
  status?: number
  code?: string
}

export class APIClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>

  constructor(baseURL: string = '', defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }
  }

  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL
    } = config

    const url = `${this.baseURL}${endpoint}`
    const cacheKey = cache ? `api_${method}_${url}_${JSON.stringify(body || {})}` : null

    // Try cache first
    if (cache && cacheKey) {
      const cached = await apiCache.get<APIResponse<T>>(cacheKey)
      if (cached) {
        return cached
      }
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      })

      const data = await response.json()

      const result: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      }

      // Cache successful responses
      if (cache && cacheKey && response.ok) {
        await apiCache.set(cacheKey, result, cacheTTL)
      }

      if (!response.ok) {
        throw new APIError({
          message: data.message || 'Request failed',
          status: response.status,
          code: data.code
        })
      }

      return result
    } catch (error) {
      if (error instanceof APIError) {
        throw error
      }
      throw new APIError({
        message: error instanceof Error ? error.message : 'Unknown error',
        code: 'NETWORK_ERROR'
      })
    }
  }

  async get<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' })
  }

  async post<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body })
  }

  async put<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body })
  }

  async patch<T>(endpoint: string, body?: any, config: Omit<RequestConfig, 'method'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body })
  }

  async delete<T>(endpoint: string, config: Omit<RequestConfig, 'method' | 'body'> = {}): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' })
  }

  setBaseURL(baseURL: string): void {
    this.baseURL = baseURL
  }

  setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers }
  }

  getBaseURL(): string {
    return this.baseURL
  }

  getDefaultHeaders(): Record<string, string> {
    return { ...this.defaultHeaders }
  }
}

// Default API client instance
export const apiClient = new APIClient(
  process.env.NEXT_PUBLIC_API_BASE_URL || '',
  {
    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY || ''
  }
)

// Error class
export class APIError extends Error {
  status?: number
  code?: string

  constructor({ message, status, code }: APIError) {
    super(message)
    this.name = 'APIError'
    this.status = status
    this.code = code
  }
}

// Utility functions
export const createAPIError = (message: string, status?: number, code?: string): APIError => {
  return new APIError({ message, status, code })
}

export const isAPIError = (error: any): error is APIError => {
  return error instanceof APIError
}