// Error tracking utility
export const reportError = (error: Error, context?: Record<string, any>) => {
  console.error('Error reported:', error, context);
  // In a real application, this would send the error to an error tracking service
};

export const initErrorReporting = () => {
  console.log('Error reporting initialized');
  // In a real application, this would initialize error tracking services
};

export default {
  reportError,
  initErrorReporting
};