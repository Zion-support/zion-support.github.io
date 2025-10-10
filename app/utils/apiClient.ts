// API client utility

export interface APIClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
  retries?: number;
  retryDelay?: number;
}

export interface APIResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface APIError {
  message: string;
  status?: number;
  statusText?: string;
  data?: any;
}

export class APIClient {
  private config: Required<APIClientConfig>;

  constructor(config: APIClientConfig = {}) {
    this.config = {
      baseURL: '',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      retries: 3,
      retryDelay: 1000,
      ...config
    };
  }

  /**
   * Make a GET request
   */
  async get<T = any>(url: string, params?: Record<string, any>): Promise<APIResponse<T>> {
    const queryString = params ? this.buildQueryString(params) : '';
    const fullUrl = `${this.config.baseURL}${url}${queryString}`;
    
    return this.request<T>(fullUrl, {
      method: 'GET',
      headers: this.config.headers
    });
  }

  /**
   * Make a POST request
   */
  async post<T = any>(url: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>(`${this.config.baseURL}${url}`, {
      method: 'POST',
      headers: this.config.headers,
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a PUT request
   */
  async put<T = any>(url: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>(`${this.config.baseURL}${url}`, {
      method: 'PUT',
      headers: this.config.headers,
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a DELETE request
   */
  async delete<T = any>(url: string): Promise<APIResponse<T>> {
    return this.request<T>(`${this.config.baseURL}${url}`, {
      method: 'DELETE',
      headers: this.config.headers
    });
  }

  /**
   * Make a PATCH request
   */
  async patch<T = any>(url: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>(`${this.config.baseURL}${url}`, {
      method: 'PATCH',
      headers: this.config.headers,
      body: data ? JSON.stringify(data) : undefined
    });
  }

  /**
   * Make a request with retries
   */
  private async request<T>(url: string, options: RequestInit): Promise<APIResponse<T>> {
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= this.config.retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        const data = await response.json();
        const headers: Record<string, string> = {};
        response.headers.forEach((value, key) => {
          headers[key] = value;
        });

        return {
          data,
          status: response.status,
          statusText: response.statusText,
          headers
        };
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < this.config.retries) {
          await this.delay(this.config.retryDelay * Math.pow(2, attempt));
        }
      }
    }

    throw new Error(`Request failed after ${this.config.retries + 1} attempts: ${lastError?.message}`);
  }

  /**
   * Build query string from parameters
   */
  private buildQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
  }

  /**
   * Delay execution
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Set default headers
   */
  setHeaders(headers: Record<string, string>): void {
    this.config.headers = { ...this.config.headers, ...headers };
  }

  /**
   * Set base URL
   */
  setBaseURL(baseURL: string): void {
    this.config.baseURL = baseURL;
  }

  /**
   * Set timeout
   */
  setTimeout(timeout: number): void {
    this.config.timeout = timeout;
  }
}

export default APIClient;