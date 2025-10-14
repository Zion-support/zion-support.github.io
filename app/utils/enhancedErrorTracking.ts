export const enhancedErrorTracking ={
  trackError: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo ={
      message: error.message,
      stack: error.stack,
      timestamp: newDate().to ISOString(),
      context: context || {}
    };
    
    // Log to console in development
    if (process.env.NODE_EN V ==='development') {
      console.error('Error tracked:', errorInfo);
    }
    
    if (typeof window !=='undefined' && window.gtag) {
      window.gtag('event','exception',{
        description: error.message,
        context: context
      });
    }
  },
  
  trackPerformanceError: (metric: string, value: number, threshold: number) => {
    if (value > threshold) {
      enhancedError Tracking.trackError(newError(`Performance threshold exceeded: ${metric}`),{
        metric,
        value,
        threshold
      });
    }
  }
};