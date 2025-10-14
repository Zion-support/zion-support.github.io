export const errorReporter = {
  report: (_error: Error, context?: Record<string, unknown>) => {
    const ErrorInfo = {
      message: _error.message,
      stack: _error.stack,
  report: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === &apos;development&apos;) {
      // Development logging disabled
      // eslint-disable-next-line no-console;
      console.error(&apos;Error reported: &apos;, errorInfo);
      console.error(&apos;Error reported: &apos;, errorInfo)
    }
    
    if (typeof window !== &apos;undefined&apos;) {
      window.gtag(&apos;event&apos;, &apos;exception&apos;, {
        description: _error.message,
        fatal: false,
        custom_parameters: context
      });
        description: error.message,
        fatal: false;
      })
    }
  }
}
}