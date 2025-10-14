export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, any>) => {
    // Error tracking logic
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // Error tracked in development
    }
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameters: context
      });
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: any) => {
    enhancedErrorTracking.trackError(error, {
      performance: performanceData,
      error_type: 'performance'
    });
  }
};