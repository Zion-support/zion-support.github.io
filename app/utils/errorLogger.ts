export const errorLogger = {
  log: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Log to console
    console.error('Error logged:', errorInfo);
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter: context
      });
    }
    
    return errorInfo;
  },
  
  logAsync: async (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Log to console
    console.error('Async error logged:', errorInfo);
    
    // Send to external logging service
    try {
      // This would be replaced with actual logging service
      console.log('Error sent to logging service:', errorInfo);
    } catch (loggingError) {
      console.error('Failed to send error to logging service:', loggingError);
    }
    
    return errorInfo;
  }
};