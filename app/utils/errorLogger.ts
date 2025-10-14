export const error Logger = {
  log: (_error: Error, context?: Record<string, unknown>) => {
    const ErrorInfo = {
      message: _error.message,
      stack: _error.stack,
  log: (error: Error, context?: Record<string, unknown>) => {
    const error Info = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().to ISOString(),
      context: context || {}

    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      // Development logging disabled
      // eslint-disable-next-line no-console
      console.error('Error logged: ', error Info);
      console.error('Error logged: ', error Info)
    
    if (typeof window !== 'undefined') {
      window.gtag('event', 'exception', {

      });
        description: error.message,
        fatal: false})