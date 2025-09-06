 const instance: AxiosInstance = {
  defaults: {
  headers: {
  common: {
  
}
<<<<<<< HEAD

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
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      return config;
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
          window.location.href = '/auth/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

// Export the function instead of calling it immediately to avoid temporal dead zone issues
export default createAxiosInstance;
=======
}
};
interceptors: {
  response: new InterceptorManager () 
};
async get (url, init = {
  
}) {
  const params = (init as any) .params ? '?' + new URLSearchParams ( (init as any) .params) .toString () // Request interceptor instance.interceptors.request.use ( (config: unknown) => {
  // Add auth token if available if (typeof window !== 'undefined') {
  if (token && config.headers) {
  config.headers.Authorization = `Bearer $ {
  token 
}` 
}
}return config 
};
// Response interceptor instance.interceptors.response.use ( (response: unknown) => response;
(error: unknown) => {
  if (error?.response?.status === 401) {
  // Handle unauthorized access if (typeof window !== 'undefined') {
  
}return Promise.reject (error) 
});
return instance 
};
// Export the function instead of calling it immediately to avoid temporal dead zone issues export default createAxiosInstance;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
