export interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
  retries: number;
  retryDelay: number;
}

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiClient = {
  config: {
    baseURL: '',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    },
    retries: 3,
    retryDelay: 1000
  } as ApiClientConfig,

  // Initialize API client
  init: (config: Partial<ApiClientConfig> = {}): void => {
    apiClient.config = { ...apiClient.config, ...config };
  },

  // Make HTTP request
  request: async <T = any>(
    method: string,
    url: string,
    data?: any,
    options: Partial<ApiClientConfig> = {}
  ): Promise<ApiResponse<T>> => {
    const config = { ...apiClient.config, ...options };
    const fullUrl = url.startsWith('http') ? url : `${config.baseURL}${url}`;

    const requestOptions: RequestInit = {
      method,
      headers: config.headers,
      signal: AbortSignal.timeout(config.timeout)
    };

    if (data && method !== 'GET') {
      requestOptions.body = JSON.stringify(data);
    }

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= config.retries; attempt++) {
      try {
        const response = await fetch(fullUrl, requestOptions);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new ApiError(
            errorData.message || 'Request failed',
            response.status,
            response.statusText,
            errorData
          );
        }

        const responseData = await response.json();
        
        return {
          data: responseData,
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries())
        };
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < config.retries) {
          await new Promise(resolve => setTimeout(resolve, config.retryDelay * (attempt + 1)));
        }
      }
    }

    throw lastError || new Error('Request failed after all retries');
  },

  // GET request
  get: <T = any>(url: string, options?: Partial<ApiClientConfig>): Promise<ApiResponse<T>> => {
    return apiClient.request<T>('GET', url, undefined, options);
  },

  // POST request
  post: <T = any>(url: string, data?: any, options?: Partial<ApiClientConfig>): Promise<ApiResponse<T>> => {
    return apiClient.request<T>('POST', url, data, options);
  },

  // PUT request
  put: <T = any>(url: string, data?: any, options?: Partial<ApiClientConfig>): Promise<ApiResponse<T>> => {
    return apiClient.request<T>('PUT', url, data, options);
  },

  // PATCH request
  patch: <T = any>(url: string, data?: any, options?: Partial<ApiClientConfig>): Promise<ApiResponse<T>> => {
    return apiClient.request<T>('PATCH', url, data, options);
  },

  // DELETE request
  delete: <T = any>(url: string, options?: Partial<ApiClientConfig>): Promise<ApiResponse<T>> => {
    return apiClient.request<T>('DELETE', url, undefined, options);
  },

  // Set default headers
  setHeaders: (headers: Record<string, string>): void => {
    apiClient.config.headers = { ...apiClient.config.headers, ...headers };
  },

  // Set authorization header
  setAuthToken: (token: string): void => {
    apiClient.setHeaders({ Authorization: `Bearer ${token}` });
  },

  // Remove authorization header
  removeAuthToken: (): void => {
    const { Authorization: _, ...headers } = apiClient.config.headers;
    apiClient.config.headers = headers;
  }
};

export default apiClient;