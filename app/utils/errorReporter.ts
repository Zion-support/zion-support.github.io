export const errorReporter = {
  report: (error: Error, context?: Record<string, unknown>) => {
    const error Info = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().to ISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported: ', errorInfo)
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
  }
}