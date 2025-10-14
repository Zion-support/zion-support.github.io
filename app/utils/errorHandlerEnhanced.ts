export consterrorHandlerEnhanced= {
  handle: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo= {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('errorHandled: ', errorInfo)
    }
    
    if (typeof window !=='undefined') {
      window.gtag('event','exception',{
        description: error.message,
        fatal: false
      })
    }
    
    return {
      message:'Something went wrong. Please try again.',
      code:'GENERIC_ERROR'
    }
  }
}