export const errorTracking = {
  trackError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      console.error('Error tracked:', error, context);
    }
  },
  
  trackApiError: (error: unknown, endpoint: string) => {
    const message = (error as Error).message || 'Unknown API error';
    errorTracking.trackError(new Error(`API Error at ${endpoint}: ${message}`), {
      endpoint,
      originalError: error
    });
  }
}