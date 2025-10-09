// Advanced error handling utilities

export interface ErrorInfo {
  message: string;
  stack?: string;
  component?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 100;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private constructor() {
    this.setupGlobalErrorHandling();
  }

  private setupGlobalErrorHandling() {
    if (typeof window === 'undefined') return;

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        component: 'Global',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        component: 'Global',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  handleError(errorInfo: ErrorInfo) {
    // Add to queue
    this.errorQueue.push(errorInfo);
    
    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error handled:', errorInfo);
    }

    // Send to error reporting service
    this.reportError(errorInfo);
  }

  private async reportError(errorInfo: ErrorInfo) {
    try {
      // In a real application, you would send this to your error reporting service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorInfo)
      // });

      // For now, just log it
      console.log('Error reported:', errorInfo);
    } catch (error) {
      console.error('Failed to report error:', error);
    }
  }

  getErrorQueue(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  clearErrorQueue() {
    this.errorQueue = [];
  }

  getErrorStats() {
    const errors = this.errorQueue;
    const componentErrors = errors.reduce((acc, error) => {
      const component = error.component || 'Unknown';
      acc[component] = (acc[component] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalErrors: errors.length,
      componentErrors,
      recentErrors: errors.slice(-10),
    };
  }
}

export const errorHandler = ErrorHandler.getInstance();

// React Error Boundary helper
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: {
    fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  }
) => {
  return React.forwardRef<any, P>((props, ref) => {
    const [hasError, setHasError] = React.useState(false);
    const [error, setError] = React.useState<Error | null>(null);

    const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
      setHasError(true);
      setError(error);
      
      errorHandler.handleError({
        message: error.message,
        stack: error.stack,
        component: Component.displayName || Component.name,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });

      if (errorBoundaryProps?.onError) {
        errorBoundaryProps.onError(error, errorInfo);
      }
    };

    const retry = () => {
      setHasError(false);
      setError(null);
    };

    if (hasError && error) {
      if (errorBoundaryProps?.fallback) {
        const FallbackComponent = errorBoundaryProps.fallback;
        return <FallbackComponent error={error} retry={retry} />;
      }

      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>{error.message}</p>
          <button onClick={retry}>Try again</button>
        </div>
      );
    }

    return <Component {...props} ref={ref} />;
  });
};