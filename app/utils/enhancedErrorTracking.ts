export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context: context || {}
    };
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked: ', errorInfo);
    }
    
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: any) => void }).gtag;
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        context: context
      });
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      performance: true,
      performanceData
    });
  },
  
  trackNetworkError: (error: Error, url: string) => {
    enhancedErrorTracking.trackError(error, {
      network: true,
      url
    });
  }
};