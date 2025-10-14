export const apiInterceptor = {
  request: (config: Record<string, unknown>) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken'