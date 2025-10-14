export const enhancedErrorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Send to error tracking service
      console.error('Error tracked:', error, context);
    }
  },
  
  trackPerformanceError: (error: Error, performanceData: unknown) => {
    enhancedErrorTracking.trackError(error, {
      type: 'performance',
      performanceData
    });
  },
  
  trackUserError: (error: Error, userContext: Record<string, unknown>) => {
    enhancedErrorTracking.trackError(error, {
      type: 'user',
      userContext
    });
  }
}