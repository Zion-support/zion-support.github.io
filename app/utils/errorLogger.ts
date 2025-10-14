export const errorLogger = {
  log: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo= {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error logged: ', errorInfo);
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameters: context
      });
    }
  }
}
