import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';

// Create and configure axios instance
const createAxiosInstance = (): any => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config: any) => {
      // Add auth token if available
      if (typeof window !== 'undefined') {
        const token = safeStorage.getItem('auth-token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  }
}

export interface RequestConfig extends RequestInit {
  withCredentials?: boolean;
}

export interface AxiosInstance {
  interceptors: { request: InterceptorManager; response: InterceptorManager };
  get<T = any>(
    url: string,
    config?: { params?: Record<string, any> } & RequestConfig
  ): Promise<AxiosResponse<T>>;
  post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfig
  ): Promise<AxiosResponse<T>>;
  patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<AxiosResponse<T>>;
  delete<T = any>(url: string, config?: RequestConfig): Promise<AxiosResponse<T>>;
}

export interface CustomAxiosStatic {
  create: typeof create;
  defaults: AxiosDefaults;
  interceptors: { request: InterceptorManager; response: InterceptorManager };
  get: AxiosInstance['get'];
  post: AxiosInstance['post'];
  patch: AxiosInstance['patch'];
  delete: AxiosInstance['delete'];
}

interface AxiosDefaults {
  headers: { common: Record<string, string> };
  baseURL?: string;
}

const globalDefaults: AxiosDefaults = {
  headers: { common: {} },
  baseURL: '',
};

const globalInterceptors = {
  request: new InterceptorManager(),
  response: new InterceptorManager(),
};

export function create(config: { baseURL?: string; withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = config.baseURL || '';
  const defaultWithCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    interceptors: { request: new InterceptorManager(), response: new InterceptorManager() },
    async get<T = any>(url: string, init: { params?: Record<string, any> } & RequestConfig = {} as any) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const opts = { ...init } as RequestConfig;
      delete (opts as any).params;
      return request<T>(baseURL + url + params, 'GET', opts);
    },
    async post<T = any>(url: string, data: any = {}, init: RequestConfig = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestConfig;
      return request<T>(baseURL + url, 'POST', opts);
    },
    async patch<T = any>(url: string, data: any = {}, init: RequestConfig = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...(init as any).headers,
      };
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestConfig;
      return request<T>(baseURL + url, 'PATCH', opts);
    },
    async delete<T = any>(url: string, init: RequestConfig = {} as any) {
      return request<T>(baseURL + url, 'DELETE', init);
    },
  };

  // Include global interceptors on the instance
  instance.interceptors.request.handlers.push(
    ...globalInterceptors.request.handlers
  );
  instance.interceptors.response.handlers.push(
    ...globalInterceptors.response.handlers
  );

import { setCorrelationId } from '@/utils/correlationManager';

// ... (other imports and code)

  // Response interceptor
  instance.interceptors.response.use(
    (response: any) => {
      const correlationId = response.headers?.['x-correlation-id'] || response.headers?.['X-Correlation-ID'];
      if (correlationId) {
        setCorrelationId(correlationId as string);
      }
      return response;
    },
    (error: any) => {
      // Also try to get correlation ID from error responses if the server includes it
      const correlationId = error.response?.headers?.['x-correlation-id'] || error.response?.headers?.['X-Correlation-ID'];
      if (correlationId) {
        setCorrelationId(correlationId as string);
      }

      if (error?.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          safeStorage.removeItem('auth-token');
          window.location.href = '/auth/login';
        }
      }
      return Promise.reject(error);
    }

    // Read authToken from cookies
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);
    const authToken =
      cookies['authToken'] ||
      safeStorage.getItem('zion_token') ||
      safeStorage.getItem('token');

    const headers: Record<string, string> = { ...globalDefaults.headers.common };
    if (reqInit.headers) {
      if (reqInit.headers instanceof Headers) {
        (reqInit.headers as Headers).forEach((value, key) => headers[key] = value);
      } else if (Array.isArray(reqInit.headers)) { // string[][]
        for (const [key, value] of (reqInit.headers as string[][])) {
          headers[key] = value;
        }
      } else { // Record<string, string>
        Object.assign(headers, reqInit.headers as Record<string, string>);
      }
    }
    if (authToken) {
      headers['Authorization'] = `Bearer ${authToken}`;
    }

    const withCreds = reqInit.withCredentials ?? defaultWithCreds;
    delete reqInit.withCredentials;

    const response = await fetch(url, {
      ...reqInit,
      method,
      headers,
      credentials: withCreds ? 'include' : reqInit.credentials,
    });
    let data: any = null;
    try {
      data = await response.clone().json();
    } catch {}
    const result: AxiosResponse<T> = { data, status: response.status };
    if (response.ok) {
      let res: any = result;
      for (const h of instance.interceptors.response.handlers) {
        if (h && h.fulfilled) { // Added null check for h
          res = await h.fulfilled(res);
        }
      }
      return res;
    } else {
      const err: AxiosError = Object.assign(new Error('Request failed'), {
        response: result,
        config: { url, method },
      });
      for (const h of instance.interceptors.response.handlers) {
        if (h && h.rejected) { // Added null check for h
          await h.rejected(err);
        }
      }
      throw err;
    }
  }

  return instance;
};

// Export the function instead of calling it immediately to avoid temporal dead zone issues
export default createAxiosInstance;
