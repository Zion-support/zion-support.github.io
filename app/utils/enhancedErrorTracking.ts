export const enhancedErrorTracking = {
  trackError: (_error: Error, context?: Record<string, unknown>) => {
    const ErrorInfo = {
      message: _error.message,
      stack: _error.stack,
  trackError: (error: Error, context?: Record<string, unknown>) => {
    // Error tracking logic
  trackError: (error: Error, context?: Record<string, any>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {,}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // Development logging disabled
      console.error('Error tracked: ', errorInfo)
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false,
        error_type: 'performance',})
    }
  },
  
  trackPerformanceError: (_error: Error, performanceData: unknown,) => {
    enhancedErrorTracking.trackError(_error, {
  trackPerformanceError: (error: Error, performanceData: unknown,) => {
    enhancedErrorTracking.trackError(error, {
      performance: performanceData,
      _error_type: 'performance',});
  trackPerformanceError: (metric: string, value: number, threshold: number,) => {
    if (value > threshold) {
      enhancedErrorTracking.trackError(new Error(`Performance threshold exceeded: ${metric,}`), {
        metric,
        value,
        threshold
      })
    }
  }
}
}}}}}}