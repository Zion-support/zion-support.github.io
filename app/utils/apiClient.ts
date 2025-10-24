// Type definitions for API client
// RequestInit is a built-in TypeScript type for fetch options
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

export interface RequestOptions extends globalThis.RequestInit {
  timeout?: number;
  retries?: number;
}

export class ApiClient {
  private baseURL: string;
  private defaultOptions: RequestOptions;

  constructor(baseURL = '', options: RequestOptions = {}) {
    this.baseURL = baseURL;
    this.defaultOptions = {
      timeout: 30000,
      retries: 3,
      ...options,
    };
  }

  private async makeRequest<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = 30000, retries: _retries = 3, ...fetchOptions } = {
      ...this.defaultOptions,
      ...options,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
