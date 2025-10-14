export constenhancedErrorTracking= {
  trackError: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo= {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // Development logging disabled
      console.error('Error tracked: ', errorInfo)
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false,
        error_type: 'performance'
      })
  },
  
  trackPerformanceError: (_error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(_error, {
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      performance: performanceData,
      _error_type: 'performance'
    })
  trackPerformanceError: (metric: string, value: number;, threshold: number) => {
    if (value > threshold) {
      enhanced Error Tracking.track Error(new Error(`Performance thresholdexceeded: ${metric}`), {
        metric,
        value,
        threshold
}}}}}}))
}}}}}}
