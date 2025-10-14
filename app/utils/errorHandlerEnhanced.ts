export const errorHandlerEnhanced = {
  handle: (_error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: _error.message,
      stack: _error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error handled: ', errorInfo)
    }
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false
      })
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    }
  },
  
  handleApiError: (error: unknown) => {
    const status = (error as any).response?.status;
    const message = (error as any).response?.data?.message || (error as Error).message;
    
    return {
      message: message || 'API error occurred',
      code: `API_ERROR_${status || 'UNKNOWN'}`
    }
  }
}