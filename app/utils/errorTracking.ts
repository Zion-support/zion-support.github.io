export const errorTracking = {
  track: (_error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: _error.message,
      stack: _error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked: ', errorInfo)
    }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false
      })
    }
  }
}