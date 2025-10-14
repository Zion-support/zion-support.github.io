export const errorReporter = {
  report: (error: Error, context?: Record<string, any>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    // Log to console in development
    if (process.env.NODE_ENV === 'development'
      console.error('Error reported:'
    if (typeof window !== 'undefined'
      window.gtag('event', 'exception'