'use client';

export interface ErrorInfo {
  message: string;
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

  private constructor() {
    // Empty block
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public logError(error: Error, errorInfo?: { componentStack?: string; errorBoundary?: string }): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      errorBoundary: errorInfo?.errorBoundary,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
    };

    this.errors.push(errorData);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }

    // Send to error reporting service if configured
    this.sendToErrorService(errorData);
  }

  private async sendToErrorService(errorData: ErrorInfo): Promise<void> {
    try {
      // This would typically send to a service like Sentry, LogRocket, etc.
      // For now, we'll just log it
          } catch {
    // Error handled
  }
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

export 
// Global error handler
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    errorHandler.logError(event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.logError(new Error(event.reason));
  });
}