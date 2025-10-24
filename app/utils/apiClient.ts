// API Client for making HTTP requests
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  retries?: number;
}

class ApiClient {
  private client: AxiosInstance;
  private retries: number;

  constructor(config: ApiClientConfig = {}) {
    this.retries = config.retries || 3;
    
    this.client = axios.create({
      baseURL: config.baseURL || process.env.NEXT_PUBLIC_API_URL || '/api',
      timeout: config.timeout || 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('authToken');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Retry logic for network errors
        if (error.code === 'NETWORK_ERROR' && originalRequest && !originalRequest._retry) {
          originalRequest._retry = true;
          return this.client(originalRequest);
        }

        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.patch<T>(url, data, config);
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }
}

// Create and export a singleton instance
export const apiClient = new ApiClient();
export default apiClient;