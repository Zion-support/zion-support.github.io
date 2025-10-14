export const errorReporter = {
  report: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter: context
      });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorInfo);
    }
    
    return errorInfo;
  },
  
  reportAsync: async (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Send to external error reporting service
    try {
      // This would be replaced with actual error reporting service
      console.log('Error sent to reporting service:', errorInfo);
    } catch (reportingError) {
      console.error('Failed to send error to reporting service:', reportingError);
    }
    
    return errorInfo;
  }
};