export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        ...context
      });
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      type: 'performance',
      performanceData
    });
  },
  
  trackNetworkError: (error: Error, url: string, status?: number) => {
    enhancedErrorTracking.trackError(error, {
      type: 'network',
      url,
      status
    });
  }
};