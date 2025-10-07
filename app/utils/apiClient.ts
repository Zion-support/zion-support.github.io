/**
 * API Client Utility
 * Provides a robust HTTP client with retry logic, error handling, and request/response interceptors
 */

import config from '../config/appConfig';

export interface ApiError extends Error {
  status?: number;
  statusText?: string;
  data?: unknown;
}

export interface RequestOptions extends RequestInit {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

/**
 * Custom fetch wrapper with timeout support
 */
async function fetchWithTimeout(
  url: string,
  options: RequestOptions = {}
): Promise<Response> {
  const { timeout = config.api.timeout, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Retry logic for failed requests
 */
async function retryRequest<T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }

    // Don't retry on client errors (4xx)
    if (error instanceof Error && 'status' in error) {
      const status = (error as ApiError).status;
      if (status && status >= 400 && status < 500) {
        throw error;
      }
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
    return retryRequest(fn, retries - 1, delay * 2); // Exponential backoff
  }
}

/**
 * Create an API error with additional context
 */
function createApiError(
  message: string,
  status?: number,
  statusText?: string,
  data?: unknown
): ApiError {
  const error = new Error(message) as ApiError;
  error.name = 'ApiError';
  error.status = status;
  error.statusText = statusText;
  error.data = data;
  return error;
}

/**
 * Main API client class
 */
class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  }

  /**
   * Perform a request with the API client
   */
  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const {
      retries = config.api.retryAttempts,
      retryDelay = 1000,
      headers = {},
      ...fetchOptions
    } = options;

    const url = `${this.baseUrl}${endpoint}`;
    
    const requestFn = async () => {
      const response = await fetchWithTimeout(url, {
        ...fetchOptions,
        headers: {
          ...this.defaultHeaders,
          ...headers,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw createApiError(
          `HTTP ${response.status}: ${response.statusText}`,
          response.status,
          response.statusText,
          errorData
        );
      }

      return response.json();
    };

    return retryRequest(requestFn, retries, retryDelay);
  }

  /**
   * Perform a GET request
   */
  async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  /**
   * Perform a POST request
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Perform a PUT request
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * Perform a PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  /**
   * Perform a DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }

  /**
   * Set authorization header
   */
  setAuthToken(token: string): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      'Authorization': `Bearer ${token}`,
    };
  }

  /**
   * Clear authorization header
   */
  clearAuthToken(): void {
    const headers = { ...this.defaultHeaders };
    delete (headers as Record<string, string>)['Authorization'];
    this.defaultHeaders = headers;
  }
}

// Export singleton instance
export const apiClient = new ApiClient(config.api.baseUrl);

export default ApiClient;