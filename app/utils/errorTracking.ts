export const errorTracking = {
  track: (error: Error, context?: Record<string, unknown>) => {
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // TODO: Implement proper error reporting service
      // errorReportingService.captureException(error, { extra: { context } });
    }
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameters: context
      });
    }
  }
};