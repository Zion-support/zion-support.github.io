/**
 * Comprehensive Error Handling Utilities
 * Provides robust error handling and reporting
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 50;

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        component: 'Global',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        component: 'Promise',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Handle resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        this.handleError({
          message: `Resource loading error: ${target.tagName}`,
          stack: `Source: ${(target as any).src || (target as any).href}`,
          component: 'Resource',
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }
    }, true);
  }

  public handleError(errorInfo: ErrorInfo): void {
    // Add to queue
    this.errorQueue.push(errorInfo);
    
    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', errorInfo);
    }

    // Send to error reporting service
    this.reportError(errorInfo);
  }

  private async reportError(errorInfo: ErrorInfo): Promise<void> {
    try {
      // In production, this would send to an error reporting service
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Sentry, LogRocket, etc.
        // await this.sendToErrorService(errorInfo);
      }
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  public getErrorQueue(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  public getErrorStats(): { total: number; recent: number; critical: number } {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    
    const recent = this.errorQueue.filter(error => error.timestamp > oneHourAgo).length;
    const critical = this.errorQueue.filter(error => 
      error.message.toLowerCase().includes('critical') ||
      error.message.toLowerCase().includes('fatal')
    ).length;

    return {
      total: this.errorQueue.length,
      recent,
      critical
    };
  }
}

// React Error Boundary Hook
export const useErrorHandler = () => {
  const errorHandler = ErrorHandler.getInstance();

  const handleError = (error: Error, errorInfo?: React.ErrorInfo, component?: string) => {
    errorHandler.handleError({
      message: error.message,
      stack: error.stack,
      component: component || 'Unknown',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  };

  return { handleError, errorHandler };
};

// Error Boundary Component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  private errorHandler: ErrorHandler;

  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = ErrorHandler.getInstance();
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.errorHandler.handleError({
      message: error.message,
      stack: error.stack,
      component: 'ErrorBoundary',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });

    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-gray-900 rounded-lg text-left">
                <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-32">
                  {this.state.error.message}
                </pre>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              If this problem persists, please contact our support team.
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Async error handler
export const withErrorHandling = <P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> => {
  return (props: P) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};

// Error reporting service integration
export const reportError = (error: Error, context?: Record<string, unknown>): void => {
  const errorHandler = ErrorHandler.getInstance();
  errorHandler.handleError({
    message: error.message,
    stack: error.stack,
    component: context?.component as string || 'Unknown',
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    url: window.location.href,
  });
};

// Performance error tracking
export const trackPerformanceError = (error: Error, metric: string): void => {
  reportError(error, { component: 'Performance', metric });
};

// Network error tracking
export const trackNetworkError = (error: Error, url: string, method: string): void => {
  reportError(error, { component: 'Network', url, method });
};

// Validation error tracking
export const trackValidationError = (error: Error, field: string, value: unknown): void => {
  reportError(error, { component: 'Validation', field, value: String(value) });
};

export default ErrorHandler;