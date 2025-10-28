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

export interface ErrorHandlingOptions {
  enableLogging?: boolean;
  enableReporting?: boolean;
  enableRetry?: boolean;
  maxRetries?: number;
}

class ErrorHandling {
  private options: ErrorHandlingOptions;
  private retryCount: Map<string, number> = new Map();

  constructor(options: ErrorHandlingOptions = {}) {
    this.options = {
      enableLogging: true,
      enableReporting: true,
      enableRetry: false,
      maxRetries: 3,
      ...options,
    };
  }

  // Handle JavaScript errors
  handleError(error: Error, errorInfo?: Partial<ErrorInfo>): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
      ...errorInfo,
    };

    if (this.options.enableLogging) {
      console.error('Error handled:', errorData);
    }

    if (this.options.enableReporting) {
      this.reportError(errorData);
    }
  }

  // Handle promise rejections
  handlePromiseRejection(event: any): void {
    const errorData: ErrorInfo = {
      message: event.reason?.message || 'Unhandled promise rejection',
      stack: event.reason?.stack,
      timestamp: Date.now(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'Unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
    };

    if (this.options.enableLogging) {
      console.error('Promise rejection handled:', errorData);
    }

    if (this.options.enableReporting) {
      this.reportError(errorData);
    }
  }

  // Retry a function with exponential backoff
  async retry<T>(
    fn: () => Promise<T>,
    context: string,
    maxRetries?: number
  ): Promise<T> {
    const retries = maxRetries || this.options.maxRetries || 3;
    const currentRetries = this.retryCount.get(context) || 0;

    if (currentRetries >= retries) {
      throw new Error(`Max retries (${retries}) exceeded for ${context}`);
    }

    try {
      const result = await fn();
      this.retryCount.delete(context);
      return result;
    } catch (error) {
      this.retryCount.set(context, currentRetries + 1);
      
      if (this.options.enableLogging) {
        console.warn(`Retry ${currentRetries + 1}/${retries} for ${context}:`, error);
      }

      // Exponential backoff
      const delay = Math.pow(2, currentRetries) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));

      return this.retry(fn, context, maxRetries);
    }
  }

  // Report error to external service
  private reportError(errorInfo: ErrorInfo): void {
    if (typeof window === 'undefined') return;

    // Send to error reporting service
    if ((window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: errorInfo.message,
        fatal: false,
        custom_map: {
          component_stack: errorInfo.componentStack,
          error_boundary: errorInfo.errorBoundary,
        },
      });
    }

    // Send to custom error reporting endpoint
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorInfo),
    }).catch(() => {
      // Silently fail if error reporting fails
    });
  }

  // Initialize error handling
  initialize(): void {
    if (typeof window === 'undefined') return;

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        componentStack: 'Global error handler',
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handlePromiseRejection(event);
    });
  }
}

// Export singleton instance
export const errorHandling = new ErrorHandling();
export default errorHandling;