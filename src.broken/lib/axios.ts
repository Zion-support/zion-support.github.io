 const instance: AxiosInstance = {
  defaults: {
  headers: {
  common: {
  
}
}
};
interceptors: {
  response: new InterceptorManager () 
};
async get (url, init = {
  
}) {
  const params = (init as any) .params ? '?' + new URLSearchParams ( (init as any) .params) .toString () // Request interceptor instance.interceptors.request.use ( (config: unknown) => {
  // Add auth token if available if (typeof window !== 'undefined') {
  if (token && config.headers) {
  config.headers.Authorization = `Bearer $ {
  token 
}` 
}
}return config 
};
// Response interceptor instance.interceptors.response.use ( (response: unknown) => response;
(error: unknown) => {
  if (error?.response?.status === 401) {
  // Handle unauthorized access if (typeof window !== 'undefined') {
  
}return Promise.reject (error) 
});
return instance 
};
// Export the function instead of calling it immediately to avoid temporal dead zone issues export default createAxiosInstance;
