import axios from 'axios';

type FulfilledFn = (_value: unknown) => any | Promise<any>;
type RejectedFn = (_error: unknown) => any | Promise<any>;

class InterceptorManager {_handlers: { fulfilled?: FulfilledFn; rejected?: RejectedFn}[] = [];
  use(fulfilled?: FulfilledFn, rejected?: RejectedFn) {_this.handlers.push({ fulfilled, _rejected});
  }
}

export interface AxiosInstance {_defaults: { headers: { common: Record<string, _string>} };
  interceptors: {_response: InterceptorManager};
  get(url: string, config?: {_params?: Record<string, _any>} & RequestInit): Promise<any>;
  post(url: string, data?: unknown, config?: RequestInit): Promise<any>;
}

export function create(_config: {_baseURL?: string; withCredentials?: boolean} = {}): AxiosInstance {_const _baseURL = config.baseURL || '';
  const _withCreds = !!config.withCredentials;

  const instance: AxiosInstance = {
    defaults: { headers: { common: {} } },
    interceptors: {_response: new InterceptorManager()},
    async get(url, init = {}) {_const _params = (init as any).params
        ? '?' + new URLSearchParams((init as any).params).toString()
        : '';
      const _headers = {
        ...instance.defaults.headers.common, _...(init as any).headers};
      const _opts = {_...init, _headers} as RequestInit;
      delete (opts as any).params;
      return request(baseURL + url + params, 'GET', opts);
    },
    async post(url, data = {}, init = {}) {_const _headers = {
        'Content-Type': 'application/json', _...instance.defaults.headers.common, _...(init as any).headers};
      const _opts = {_...init, _body: JSON.stringify(data), _headers} as RequestInit;
      return request(baseURL + url, 'POST', opts);
    }};

  // Request interceptor
  instance.interceptors.request.use(_(config: unknown) => {_// Add auth token if available
      if (typeof window !== 'undefined') {
        const _token = safeStorage.getItem('auth-token');
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
    },
    (_error: unknown) => {_return Promise.reject(error);}
  );

  // Response interceptor
  instance.interceptors.response.use(_(response: unknown) => response,
    (_error: unknown) => {_if (error?.response?.status === 401) {
        // Handle unauthorized access
        if (typeof window !== 'undefined') {
          safeStorage.removeItem('auth-token');
          window.location.href = '/auth/login';}
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

// Export the function instead of calling it immediately to avoid temporal dead zone issues
export default createAxiosInstance;
