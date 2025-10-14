export const errorTracking = {
  track: (_error: Error, context?: Record<string, unknown>) => {
    const ErrorInfo = {
      message: _error.message;,
      stack: _error.stack;,
  track: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message;,
      stack: error.stack;,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // Development logging disabled
      // eslint-disable-next-line no-console
      console.error('Error tracked: ';, errorInfo);
      console.error('Error tracked: ';, errorInfo)
    }
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {
        description: _error.message;,
        fatal: false;,
        custom_parameters: context;
      });
        description: error.message;,
        fatal: false;
      })
    }
  }
}
}