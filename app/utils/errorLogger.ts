export const errorLogger = {
  log: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged: ', errorInfo)
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter_1: JSON.stringify(context)
      })
    }
  }
}
