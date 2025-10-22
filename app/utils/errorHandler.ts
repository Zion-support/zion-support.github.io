export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
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

  public logError(error: Error, errorInfo?: Partial<ErrorInfo>): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack || '',
      ...errorInfo,
    };

    this.errorLog.push(errorData);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorData);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorData);
    }
  }

  public getErrors(): ErrorInfo[] {
    return [...this.errorLog];
  }

  public clearErrors(): void {
    this.errorLog = [];
  }

  private async sendToErrorService(errorData: ErrorInfo): Promise<void> {
    try {
      await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
      });
    } catch (err) {
      console.error('Failed to send error to service:', err);
    }
  }
}

export const errorHandler = ErrorHandler.getInstance();