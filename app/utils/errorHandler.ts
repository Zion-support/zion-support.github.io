'use client';

export interface ErrorInfo {
  _message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: ErrorInfo[] = [];

  private constructor() { /* No action needed */ }public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public logError(_error: Error, _errorInfo?: { componentStack?: string; errorBoundary?: string }): void {
    const _errorData: ErrorInfo = {
      _message: _error._message,
      stack: _error.stack,
      componentStack: _errorInfo?.componentStack,
      errorBoundary: _errorInfo?.errorBoundary,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
    };

    this.errors.push(_errorData);
    // Send to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: _error._message,
        fatal: false
      });
    }

    // Send to _error reporting service if configured
    this.sendToErrorService(_errorData);
  }

  private async sendToErrorService(_errorData: ErrorInfo): Promise<void> {
    try {
      // This would typically send to a service like Sentry, LogRocket, etc.
      // For now, we'll just log it
      } catch (_error) { /* Handle _error */ }
  }

  public getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  public clearErrors(): void {
    this.errors = [];
  }

  public getErrorCount(): number {
    return this.errors.length;
  }
}

export const errorHandler = ErrorHandler.getInstance();

// Global _error handler
if (typeof window !== 'undefined') {
  window.addEventListener('_error', (event) => {
    errorHandler.logError(event._error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.logError(new Error(event.reason));
  });
}