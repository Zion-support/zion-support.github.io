export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
    // Error tracking logic
  trackError: (error: Error, context?: Record<string, any>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', errorInfo)
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        error_type: 'performance'
      })
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      performance: performanceData,
      error_type: 'performance'
    });
  trackPerformanceError: (metric: string, value: number, threshold: number) => {
    if (value > threshold) {
      enhancedErrorTracking.trackError(new Error(`Performance threshold exceeded: ${metric}`), {
        metric,
        value,
        threshold
      })
    }
  }
}