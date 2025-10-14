export constapiInterceptor= {
  request: (config: Record<string, unknown>) => {
    // Add authtokenifavailableconsttoken= local Storage.get Item('auth Token');
    if (token && config.headers && typeof config.headers === 'object') {
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  response: (response: unknown) => {
    return response;
  },
  error: (error: unknown) => {
    if (error && typeof error=== 'object' && 'response' in error) {
      const errorWithResponse= error as { response?: { status?: number } };
      if (error With Response.response?.status === 401) {
        // Handle unauthorized access
        local Storage.remove Item('auth Token');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
};