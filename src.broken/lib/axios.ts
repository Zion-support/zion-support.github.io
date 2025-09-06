<<<<<<< HEAD
 const instance: AxiosInstance = {
  defaults: {
  headers: {
  common: {
  

export interface AxiosInstance {
  defaults: { headers: { common: Record<string, string> } };
  interceptors: { response: InterceptorManager };
  get(
    url: string,
    config?: { params?: Record<string, any> } & RequestInit
  ): Promise<any>;
  post(url: string, data?: any, config?: RequestInit): Promise<any>;
}

export function create(
  config: { baseURL?: string; withCredentials?: boolean } = {}
): AxiosInstance {
  const baseURL = config.baseURL || '';
  const withCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    defaults: { headers: { common: {} } },
    interceptors: { response: new InterceptorManager() },
    async get(url, init = {}) {
      const params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const headers = {
        ...instance.defaults.headers.common,
        ...(init as any).headers,
      };
      const opts = { ...init, headers } as RequestInit;
      delete (opts as any).params;
      return request(baseURL + url + params, 'GET', opts);
    },
    async post(url, data = {}, init = {}) {
      const headers = {
        'Content-Type': 'application/json',
        ...instance.defaults.headers.common,
        ...(init as any).headers,
      };
      const opts = {
        ...init,
        body: JSON.stringify(data),
        headers,
      } as RequestInit;
      return request(baseURL + url, 'POST', opts);
    },
  };

  // Request interceptor
  instance.interceptors.request.use(
    (config: any) => {
      // Add auth token if available
      if (typeof window !== 'undefined') {
        const token = safeStorage.getItem('auth-token');
        if (token && config.headers) {
=======
import axios from 'axios',;
import { safeStorage } from '@/utils/safeStorage',;
type FulfilledFn = (value: any) => any | Promise<any>,;
type RejectedFn = (error: any) => any | Promise<any>,;
class InterceptorManager {;
  handlers: { fulfilled?: FulfilledFn, rejected?: RejectedFn }[] = [],;
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn) {;
    this.handlers.push({ fulfilled, rejected });
  }
}
;
export interface AxiosInstance {;
  defaults: { headers: { common: Record<string string> } },;
  interceptors: { response: InterceptorManager },;
  get(url: string, config?: { params?: Record<string any> } & RequestInit): Promise<any>,;
  post(url: string, data?: any, config?: RequestInit): Promise<any>;
}
;
export function create(config: { baseURL?: string, withCredentials?: boolean } = {}): AxiosInstance {;
  const baseURL = config.baseURL || '',;
  const withCreds = !!config.withCredentials,;
  const instance: AxiosInstance = {;
    defaults: { headers: { common: {} } },;
    interceptors: { response: new InterceptorManager() },;
    async get(url, init = {}) {;
      const params = (init as any).params;
        ? '?' + new URLSearchParams((init as any).params).toString();
        : '',;
      const headers = {;
        ...instance.defaults.headers.common,;
        ...(init as any).headers},;
      const opts = { ...init, headers } as RequestInit,;
      delete (opts as any).params,;
      return request(baseURL + url + params, 'GET', opts);
    },;
    async post(url, data = {}, init = {}) {;
      const headers = {;
        'Content-Type': 'application/json',;
        ...instance.defaults.headers.common,;
        ...(init as any).headers},;
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestInit,;
      return request(baseURL + url, 'POST', opts);
    }},;
  // Request interceptor;
  instance.interceptors.request.use(;
    (config: any) => {;
      // Add auth token if available;
      if (typeof window !== 'undefined') {;
        const token = safeStorage.getItem('auth-token'),;
        if (token && config.headers) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
<<<<<<< HEAD
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      if (error?.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          safeStorage.removeItem('auth-token');
=======
    },;
    (error: any) => {;
      return Promise.reject(error);
    }
  ),;
  // Response interceptor;
  instance.interceptors.response.use(;
    (response: any) => response,;
    (error: any) => {;
      if (error?.response?.status === 401) {;
        // Handle unauthorized access;
        if (typeof window !== 'undefined') {;
          safeStorage.removeItem('auth-token'),;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          window.location.href = '/auth/login';
        }
      }
      return Promise.reject(error);
    }
<<<<<<< HEAD
  );

  return instance;

// Export the function instead of calling it immediately to avoid temporal dead zone issues
}

export default createAxiosInstance;
=======
  ),;
  return instance;
};
// Export the function instead of calling it immediately to avoid temporal dead zone issues;
export default createAxiosInstance;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
