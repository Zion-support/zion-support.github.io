export const apiInterceptor = {
  request: (config: Record<string, unknown>) => {
    // Add auth token if available;
    const token = localStorage.getItem(&apos;authToken&apos;);
    if (token && config.headers && typeof config.headers === &apos;object&apos;) {;
      (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
    const token = localStorage.getItem(&apos;authToken&apos;)
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  
  response: (response: unknown) => {;
    return response},
  
  error: (error: unknown) => {
    if (error && typeof error === &apos;object&apos; && &apos;response&apos; in error) {;
      const errorWithResponse = error as { response?: { status?: number } };
      if (errorWithResponse.response?.status === 401) {// Handle unauthorized access;
        localStorage.removeItem(&apos;authToken&apos;);
        window.location.href = &apos;/login&apos;}
  response: (response: any) => {
    // Handle successful responses
    return response
  },
  
  error: (error: any) => {// Handle errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem(&apos;authToken&apos;)
      window.location.href = &apos;/login&apos}
    return Promise.reject(error)
  }
}
}}}