export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: ErrorInfo[] = [];

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public logError(error: Error, errorInfo?: { componentStack?: string }): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    this.errorLog.push(errorData);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorData);
    }

    // Send to error tracking service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorData);
    }
  }

  private async sendToErrorService(errorData: ErrorInfo): Promise<void> {
    try {
    // Send to your preferred error tracking service
    // Example: Sentry, LogRocket, Bugsnag, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: errorData.message,
        fatal: false,
        custom_map: {
          error_stack: errorData.stack,
          component_stack: errorData.componentStack
        }
      });
    }
    } catch (error) {
      console.error('Failed to send error to tracking service:', error);
    }
  }

  public getErrorLog(): ErrorInfo[] {
    return [...this.errorLog];
  }

  public clearErrorLog(): void {
    this.errorLog = [];
  }
}

// Global error handler for unhandled errors
export const setupGlobalErrorHandlers = (): void => {
  const errorHandler = ErrorHandler.getInstance();

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = new Error(`Unhandled Promise Rejection: ${event.reason}`);
    errorHandler.logError(error);
  });

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    const error = new Error(`Uncaught Error: ${event.message}`);
    errorHandler.logError(error);
  });
};

export default ErrorHandler;