/**
 * Enhanced error handling utilities
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp?: string;
}

export class EnhancedErrorHandler {
  static handleError(error: Error, context?: ErrorContext): void {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced Error Handler:', errorInfo);
    }

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error tracking service
      // like Sentry, LogRocket, or similar
      console.error('Production Error:', errorInfo);
    }
  }

  static handleAsyncError(error: unknown, context?: ErrorContext): void {
    if (error instanceof Error) {
      this.handleError(error, context);
    } else {
      this.handleError(new Error(String(error)), context);
    }
  }
}

export const enhancedErrorHandler = EnhancedErrorHandler;
export default EnhancedErrorHandler;