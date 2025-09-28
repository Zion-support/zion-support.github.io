import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showErrorDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler
    this.props.onError?.(error, errorInfo);

    // Send error to analytics/monitoring service
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Send to error tracking service (e.g., Sentry, LogRocket, etc.)
    if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error ID:', this.state.errorId);
      console.groupEnd();
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const { error, errorInfo, errorId } = this.state;
    const bugReport = {
      errorId,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // In a real app, you'd send this to your bug reporting service
    console.log('Bug Report:', bugReport);
    
    // For now, copy to clipboard
    navigator.clipboard.writeText(JSON.stringify(bugReport, null, 2))
      .then(() => {
        alert('Bug report copied to clipboard. Please share this with the development team.');
      })
      .catch(() => {
        alert('Unable to copy bug report. Please contact support.');
      });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
            <div className="text-center">
              <div className="text-6xl mb-4">🚨</div>
              <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
              <p className="text-lg mb-6 text-gray-300">
                We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
              
              {this.state.error && (
                <div className="mb-6 p-4 bg-red-500/20 rounded-lg border border-red-500/30">
                  <p className="text-sm text-red-200">
                    <strong>Error:</strong> {this.state.error.message}
                  </p>
                  {this.props.showErrorDetails && this.state.error.stack && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-sm text-red-200">Show error details</summary>
                      <pre className="mt-2 text-xs text-red-200 overflow-auto max-h-40">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {this.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                  >
                    Try Again ({this.maxRetries - this.retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors"
                >
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleReportBug}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
                >
                  Report Bug
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-400">
                <p>Error ID: <code className="bg-black/20 px-2 py-1 rounded">{this.state.errorId}</code></p>
                <p className="mt-2">
                  If this problem persists, please contact our support team with the error ID above.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = () => setError(null);

  const handleError = (error: Error) => {
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  };

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { handleError, resetError };
}

// Higher-order component for error handling
export function withErrorHandling<P extends object>(
  Component: React.ComponentType<P>,
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>
) {
  return function ErrorHandledComponent(props: P) {
    return (
      <EnhancedErrorBoundary
        fallback={errorFallback ? <ErrorFallback /> : undefined}
        onError={(error, errorInfo) => {
          console.error('Error in wrapped component:', error, errorInfo);
        }}
      >
        <Component {...props} />
      </EnhancedErrorBoundary>
    );
  };
}

// Default error fallback component
const ErrorFallback: React.FC<{ error?: Error; retry?: () => void }> = ({ error, retry }) => (
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
    <h3 className="text-red-800 font-medium">Something went wrong</h3>
    <p className="text-red-600 text-sm mt-1">
      {error?.message || 'An unexpected error occurred'}
    </p>
    {retry && (
      <button
        onClick={retry}
        className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
      >
        Try again
      </button>
    )}
  </div>
);

export default EnhancedErrorBoundary;