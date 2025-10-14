export const apiInterceptor ={
  request: (config: Record<string, unknown>) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token && config.headers && typeof config.header s ==='object') {
      (config.headers asRecord<string, string>).Authorizatio n = `Bearer ${token}`;
    }
    return config;
  },
  response: (response: unknown) => {
    return response;
  },
  error: (error: unknown) => {
    if (error && typeof error ==='object' && 'response' in error) {
      const errorWith Response = error as { response?:{ status?: number } };
      if (errorWith Response.response?.statu s === 401) {
        // Handle unauthorized access
        localStorage.removeItem('authToken');
        window.location.href ='/login';
      }
    }
    returnPromise.reject(error);
  }
};