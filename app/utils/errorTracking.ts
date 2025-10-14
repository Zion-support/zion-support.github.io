// Error tracking utility functions
export const reportError = (error: Error, context?: Record<string, unknown>) => {
  console.error('Error reported:', error, context);
  // In a real implementation, you would send this to your error tracking service
  // like Sentry, LogRocket, or similar
};

export const initErrorReporting = () => {
  // Initialize error reporting service
  console.log('Error reporting initialized');
};
