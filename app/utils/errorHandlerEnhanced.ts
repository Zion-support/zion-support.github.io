export const errorHandlerEnhanced = {
  handle: (error: Error, context?: Record<string, any>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    // Log to console in development
    if (process.env.NODE_ENV === 'development'
      console.error('Error handled:'
    if (typeof window !== 'undefined'
      window.gtag('event', 'exception'
      message: 'Something went wrong. Please try again.'
      code: 'GENERIC_ERROR'