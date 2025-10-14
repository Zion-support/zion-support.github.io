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
    if (errorInfo) {
      console.error('Error info:', errorInfo);
    }
    
    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Send to error reporting service (e.g., Sentry, LogRocket, etc.)
      // errorReportingService.captureException(error, errorInfo);
    }
  },

  handleAsyncError: (error: Error) => {
    console.error('Async error:', error);
    // Handle async errors
  },

  handlePromiseRejection: (reason: any, promise: Promise<any>) => {
    console.error('Unhandled promise rejection:', reason, promise);
    // Handle unhandled promise rejections
  }
};

export default errorHandler;