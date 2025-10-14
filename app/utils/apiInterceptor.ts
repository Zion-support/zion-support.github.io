export const apiInterceptor = {
  request: (config: Record<string, unknown>) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  
  response: (response: unknown) => {
    return response;
  },
  
  error: (error: { response?: { status: number } }) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
};