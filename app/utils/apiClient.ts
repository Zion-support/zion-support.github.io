/**
 * Enhanced API Client with retry logic, error handling, and request interceptors
 */

import { envConfig } from './envConfig';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiRequestConfig {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: unknown;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  cache?: RequestCache;
}

export interface ProcessedApiRequestConfig {
  method: HttpMethod;
  headers: Record<string, string>;
  body?: unknown;
  timeout: number;
  retries: number;
  retryDelay: number;
  cache: RequestCache;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public response?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private requestInterceptors: Array<(config: ProcessedApiRequestConfig) => ProcessedApiRequestConfig> = [];
  private responseInterceptors: Array<(response: ApiResponse) => ApiResponse> = [];

  constructor() {
    this.baseUrl = envConfig.get('apiUrl');
    this.defaultHeaders = envConfig.getApiHeaders();
  }

  /**
   * Add request interceptor
   */
  public addRequestInterceptor(
    interceptor: (config: ProcessedApiRequestConfig) => ProcessedApiRequestConfig
  ): void {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add response interceptor
   */
  public addResponseInterceptor(
    interceptor: (response: ApiResponse) => ApiResponse
  ): void {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Make HTTP request with retry logic
   */
  private async makeRequest<T>(
    endpoint: string,
    config: ApiRequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      timeout = 30000,
      retries = 3,
      retryDelay = 1000,
      cache = 'default'
    } = config;

    let lastError: Error | null = null;

    // Apply request interceptors
    let processedConfig: ProcessedApiRequestConfig = { 
      method: method as HttpMethod, 
      headers: headers || {}, 
      body, 
      timeout, 
      retries, 
      retryDelay, 
      cache 
    };
    for (const interceptor of this.requestInterceptors) {
      processedConfig = interceptor(processedConfig);
    }

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const url = endpoint.startsWith('http') ? endpoint : `${this.baseUrl}${endpoint}`;
        
        const response = await fetch(url, {
          method: processedConfig.method,
          headers: {
            ...this.defaultHeaders,
            ...processedConfig.headers
          },
          body: processedConfig.body ? JSON.stringify(processedConfig.body) : undefined,
          signal: controller.signal,
          cache: processedConfig.cache
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new ApiError(
            errorData.message || `HTTP Error ${response.status}`,
            response.status,
            response.statusText,
            errorData
          );
        }

        const data = await response.json().catch(() => ({}));

        let apiResponse: ApiResponse<T> = {
          data: data as T,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        };

        // Apply response interceptors
        for (const interceptor of this.responseInterceptors) {
          apiResponse = interceptor(apiResponse) as ApiResponse<T>;
        }

        return apiResponse;

      } catch (error) {
        lastError = error as Error;

        // Don't retry on client errors (4xx)
        if (error instanceof ApiError && error.status >= 400 && error.status < 500) {
          throw error;
        }

        // Retry on network errors or 5xx errors
        if (attempt < retries) {
          await this.delay(retryDelay * Math.pow(2, attempt)); // Exponential backoff
          continue;
        }

        throw lastError;
      }
    }

    throw lastError || new Error('Request failed');
  }

  /**
   * Utility function for delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * GET request
   */
  public async get<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'GET' });
  }

  /**
   * POST request
   */
  public async post<T>(
    endpoint: string,
    body?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'POST', body });
  }

  /**
   * PUT request
   */
  public async put<T>(
    endpoint: string,
    body?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PUT', body });
  }

  /**
   * PATCH request
   */
  public async patch<T>(
    endpoint: string,
    body?: unknown,
    config?: ApiRequestConfig
  ): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  /**
   * DELETE request
   */
  public async delete<T>(endpoint: string, config?: ApiRequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>(endpoint, { ...config, method: 'DELETE' });
  }

  /**
   * Set base URL
   */
  public setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  /**
   * Set default headers
   */
  public setDefaultHeaders(headers: Record<string, string>): void {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Add default request interceptor for logging
if (envConfig.isDevelopment()) {
  apiClient.addRequestInterceptor((config) => {
    if (process.env.NODE_ENV === 'development') { if (import.meta.env.DEV) { console.log(`[API] ${config.method} request:`, config); } }
    return config;
  });

  apiClient.addResponseInterceptor((response) => {
    if (process.env.NODE_ENV === 'development') { if (import.meta.env.DEV) { console.log(`[API] Response (${response.status}):`, response.data); } }
    return response;
  });
}