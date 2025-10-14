export const api Interceptor = {
  request: (config: Record<string, unknown>) => {
    // Add auth token if available
    const token = local Storage.get Item('auth Token');
    if (token && config.headers && typeof config.headers === 'object') {
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    const token = local Storage.get Item('auth Token')
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
      const error With Response = error as { response?: { status?: number } };
      if (error With Response.response?.status === 401) {
        // Handle unauthorized access
        local Storage.remove Item('auth Token');
        window.location.href = '/login';
      }
  response: (response: any) => {
    // Handle successful responses
    return response
  },
  error: (error: any) => {
    // Handle errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      local Storage.remove Item('auth Token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
}
}}}