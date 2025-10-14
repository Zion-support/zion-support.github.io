'use client';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
}

export const errorHandler = (error: Error, errorInfo?: ErrorInfo) => {
  // Log error to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error caught by error handler:', error);
    if (errorInfo) {
      console.error('Error info:', errorInfo);
    }
  }

  // In production, you might want to send this to an error reporting service
  // like Sentry, LogRocket, or Bugsnag
  
  return true;
};

export default errorHandler;
