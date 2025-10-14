export const errorReporter = {
  reportError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      console.error('Error reported:', error, context);
    }
  },
  
  reportApiError: (error: unknown, endpoint: string) => {
    const message = (error as Error).message || 'Unknown API error';
    errorReporter.reportError(new Error(`API Error at ${endpoint}: ${message}`), {
      endpoint,
      originalError: error
    });
  }
}