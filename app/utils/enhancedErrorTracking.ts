export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, any>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked: ', errorInfo)
    }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        context: context
      })
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      performanceData: performanceData
    });
  },
  
  trackPerformanceThreshold: (metric: string, value: number, threshold: number) => {
    if (value > threshold) {
      enhancedErrorTracking.trackError(new Error(`Performance threshold exceeded: ${metric}`), {
        metric,
        value,
        threshold
      })
    }
  }
}