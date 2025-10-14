export const apiInterceptor = {
  request: (config: any) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  
  response: (response: any) => {
    // Handle successful responses
    return response
  },
  
  error: (error: any) => {
    // Handle errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
}