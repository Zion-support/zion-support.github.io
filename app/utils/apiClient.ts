/**
 * API Client Utility
 * Provides a centralized API client with error handling and caching
 */

export interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  cache?: boolean;
  cacheTTL?: number;
}

export interface APIResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: Response
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  async request<T = unknown>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      cache = false,
      cacheTTL = 300000
    } = config;

    const url = `${this.baseURL}${endpoint}`;
    const cacheKey = `${method}:${url}`;

    // Check cache for GET requests
    if (method === 'GET' && cache) {
      const cachedData = this.getFromCache<T>(cacheKey);
      if (cachedData) {
        return cachedData;
      }
    }

    try {
      const response = await fetch(url, {
        method,
        headers: { ...this.defaultHeaders, ...headers },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new APIError(
          `Request failed: ${response.statusText}`,
          response.status,
          response
        );
      }

      const data = await response.json();

      const apiResponse: APIResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };

      // Cache successful GET requests
      if (method === 'GET' && cache) {
        this.setCache(cacheKey, apiResponse, cacheTTL);
      }

      return apiResponse;
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      throw new APIError(
        `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        0
      );
    }
  }

  private getFromCache<T>(): APIResponse<T> | null {
    // Implementation would depend on your caching strategy
    return null;
  }

  private setCache(): void {
    // Implementation would depend on your caching strategy
  }
}

export const apiClient = new APIClient(process.env.NEXT_PUBLIC_API_URL || '/api');
export type { RequestConfig, APIResponse };
export { APIError };