interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

interface ErrorHandlerOptions {
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onUnhandledRejection?: (reason: any) => void;
  logToConsole?: boolean;
  logToServer?: boolean;
}

class ErrorHandler {
  private options: ErrorHandlerOptions;
  private errorQueue: ErrorInfo[] = [];

  constructor(options: ErrorHandlerOptions = {}) {
    this.options = {
      logToConsole: true,
      logToServer: false,
      ...options,
    };

    this.setupGlobalErrorHandlers();
  }

  private setupGlobalErrorHandlers(): void {
    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        message: event.message,
        stack: event.error?.stack,
        componentStack: '',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleUnhandledRejection(event.reason);
    });
  }

  private handleError(error: Error, errorInfo: Partial<ErrorInfo>): void {
    const fullErrorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack || '',
      componentStack: '',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...errorInfo,
    };

    // Add to error queue
    this.errorQueue.push(fullErrorInfo);

    // Log to console if enabled
    if (this.options.logToConsole) {
      console.error('Error caught by ErrorHandler:', error, fullErrorInfo);
    }

    // Log to server if enabled
    if (this.options.logToServer) {
      this.logToServer(fullErrorInfo);
    }

    // Call custom error handler
    if (this.options.onError) {
      this.options.onError(error, fullErrorInfo);
    }
  }

  private handleUnhandledRejection(reason: any): void {
    const errorInfo: ErrorInfo = {
      message: reason?.message || 'Unhandled Promise Rejection',
      stack: reason?.stack,
      componentStack: '',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.errorQueue.push(errorInfo);

    if (this.options.logToConsole) {
      console.error('Unhandled Promise Rejection:', reason, errorInfo);
    }

    if (this.options.logToServer) {
      this.logToServer(errorInfo);
    }

    if (this.options.onUnhandledRejection) {
      this.options.onUnhandledRejection(reason);
    }
  }

  private async logToServer(errorInfo: ErrorInfo): Promise<void> {
    try {
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorInfo),
      });
    } catch (error) {
      console.error('Failed to log error to server:', error);
    }
  }

  public getErrorQueue(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  public reportError(error: Error, errorInfo?: Partial<ErrorInfo>): void {
    this.handleError(error, errorInfo || {});
  }
}

// Create singleton instance
export const errorHandler = new ErrorHandler();

// Export class for custom instances
export { ErrorHandler };
export type { ErrorInfo, ErrorHandlerOptions };