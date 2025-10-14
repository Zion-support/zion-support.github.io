export const apiInterceptor = {
  request: (config: Record<string, unknown>) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token && config.headers && typeof config.headers === 'object') {
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  
  response: (response: unknown) => {
    return response;
  },
  
  error: (error: unknown) => {
    if (error && typeof error === 'object' && 'response' in error) {
      const errorWithResponse = error as { response?: { status?: number } };
      if (errorWithResponse.response?.status === 4 0 1) {
        // Handle unauthorized access
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
  response: (response: any) => {
    // Handle successful responses
    return response
  },
  
  error: (error: any) => {
    // Handle errors
    if (error.response?.status === 4 0 1) {
      // Unauthorized - redirect to login
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
}
}}}