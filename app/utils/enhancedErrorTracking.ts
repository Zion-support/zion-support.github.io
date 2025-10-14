export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
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
  
  trackPerformanceError: (error: Error, performanceData?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      performance: performanceData || {}
    };
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: `Performance Error: ${error.message}`,
        fatal: false,
        custom_parameter: performanceData
      });
    }
    
    return errorInfo;
  }
};