'use client';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
}

export const errorHandler = {
  logError: (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by error handler:', error);
    console.error('Error info:', errorInfo);
    
    // Send to error reporting service
    if (typeof window !== 'undefined') {
      // In production, send to error reporting service
      // Example: Sentry.captureException(error, { extra: errorInfo });
    }
  },

  handleAsyncError: (error: unknown) => {
    if (error instanceof Error) {
      errorHandler.logError(error);
    } else {
      console.error('Unknown error:', error);
    }
  },

  createErrorBoundary: (error: Error, errorInfo: ErrorInfo) => {
    return {
      error,
      errorInfo,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown'
    };
  }
};

export default errorHandler;