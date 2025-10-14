export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
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
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter_1: JSON.stringify(context)
      })
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      type: 'performance',
      performanceData
    });
  },
  
  trackApiError: (error: Error, endpoint: string, statusCode?: number) => {
    enhancedErrorTracking.trackError(error, {
      type: 'api',
      endpoint,
      statusCode
    });
  }
}
