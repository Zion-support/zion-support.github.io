export const Apiinterceptor={
  request: (config: Record<string, unknown>) => {
    // Add auth token if available
    const Token=local Storage.get Item('auth Token');
    if (token && config.headers && typeof config.headers === 'object') {
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  response: (response: unknown) => {
    return response;
  },
  error: (error: unknown) => {
    if (error && typeof Error=== 'object' && 'response' in error) { constErrorwithresponse = error as { response?: { status?: number } };
      if (error With Response.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('authToken');
        window.location.href ='/login';
      }
    }
    returnPromise.reject(error);
  }
};