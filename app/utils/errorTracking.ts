export const errorTracking = {
  track: (error: Error, context?: Record<string, unknown>) => {
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
      console.error('Error tracked:', errorInfo);
    }
    
    return errorInfo;
  },
  
  trackAsync: async (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Send to external error tracking service
    try {
      // This would be replaced with actual error tracking service
      console.log('Error sent to tracking service:', errorInfo);
    } catch (trackingError) {
      console.error('Failed to send error to tracking service:', trackingError);
    }
    
    return errorInfo;
  }
};