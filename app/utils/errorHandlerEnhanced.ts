export const errorHandlerEnhanced = {
  handle: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error handled: ', errorInfo);
    }
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: any) => void }).gtag;
      gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
    
    return {
      message: 'Something went wrong. Please try again.',
      code: 'GENERIC_ERROR'
    };
  }
};