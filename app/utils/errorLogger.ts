export const errorLogger = {
  log: (_error: Error, context?: Record<string, unknown>) => {
    const ErrorInfo = {
      message: _error.message,
      stack: _error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // Development logging disabled
    }
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: _error.message,
        fatal: false,
        custom_parameters: context
      });
    }
  }
};