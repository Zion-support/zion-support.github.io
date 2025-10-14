export const apiInterceptor = {
  request: (config: any) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken'