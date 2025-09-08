import axios from 'axios';
import { safeStorage } from '@/utils/safeStorage';
type FulfilledFn = $2;
type RejectedFn = $2;
class InterceptorManager {
  handlers: { fulfilled?: FulfilledFn, rejected?: RejectedFn }[] = [],
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn) {
    this.handlers.push({ fulfilled, rejected })
  }
}

export interface AxiosInstance {
  defaults: { headers: { common: Record<string, string> } },
  interceptors: { response: InterceptorManager},
  get(url: string, config?: { params?: Record<string, any> } & RequestInit): Promise<any>,
  post(url: string, data?: any, config?: RequestInit): Promise<any>
}

export function create(config: { baseURL?: string, withCredentials?: boolean } = {}): AxiosInstance {
  const baseURL = $2;
  const withCreds = $2;
  const instance: AxiosInstance = $2;
    interceptors: { response: new InterceptorManager() },
    async get(url, init = $2;
      const headers = $2;
        ...(init as any).headers},
      const opts = { ...init, headers } as RequestInit,
      delete (opts as any).params,
      return request(baseURL + url + params, 'GET', opts)
    },
    async post(url, data = {}, init = $2;
        ...instance.defaults.headers.common,
        ...(init as any).headers},
      const opts = { ...init, body: JSON.stringify(data), headers } as RequestInit,
      return request(baseURL + url, 'POST', opts)
    },

  // Request interceptor
  instance.interceptors.request.use(
    (config: any) => {
      // Add auth token if available
      if (typeof window !== 'undefined') {
        const token = safeStorage.getItem($2);
        if (token && config.headers) {
          config.headers.Authorization = $2;
    (error: any) => {
      return Promise.reject(error)
    }
  ),

  // Response interceptor
  instance.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      if (error?.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          safeStorage.removeItem($2);
          window.location.href = $2;
  return instance
},

// Export the function instead of calling it immediately to avoid temporal dead zone issues
export default createAxiosInstance,
