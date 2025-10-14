export const errorLogger = {
  logError: (error: Error, context?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      console.error('Error logged:', error, context);
    }
  },
  
  logApiError: (error: unknown, endpoint: string) => {
    const message = (error as Error).message || 'Unknown API error';
    errorLogger.logError(new Error(`API Error at ${endpoint}: ${message}`), {
      endpoint,
      originalError: error
    });
  }
}