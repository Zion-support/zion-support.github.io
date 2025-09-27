import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (erro, r: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  erro, r: Error | null;
  errorInf, o: ErrorInfo | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasErro, r: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasErro, r: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.logErrorToService(error, errorInfo);

    // Call custom error handler
    this.props.onError?.(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_stac, k: error.stack,
            component_stack: errorInfo.componentStack
          }
        });
      }

      // Send to custom analytics endpoint
      if (typeof window !== 'undefined' && typeof fetch !== 'undefined') {
        fetch('/api/error-reporting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messag, e: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
          })
        }).catch(() => {
          // Silently fail if error reporting fails
        });
      }
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-5 0 flex items-center justify-centerpx-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6text-center">
            <div className="mb-4">
              <div className="mx-auto flex items-center justify-center h-1 2 w-1 2 rounded-full bg-red-10 0 mb-4">
                <svg
                  className="h-6w-6text-red-6 0 0"
                  fill="none"
                  viewBox="00 2 4 2 4"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9 v 2 m0 4 h.0 1 m-6.9 3 8 4 h 1 3.85 6 c1.54 0 2.5 0 2-1.66 7 1.7 3 2-2.5L 1 3.7 3 2 4 c-.77-.8 3 3-1.9 6 4-.8 3 3-2.7 3 2 0 L3.7 3 2 1 6.5c-.77.8 3 3.19 2 2.51.73 2 2.5z"
                  />
                </svg>
              </div>
              <h 1 className="text-xl font-semibold text-gray-90 0 mb-2" id="something-went-wrong">
                Something went wrong
              </h1>
              <p className="text-gray-60 0 mb-6">
                We&apos;re sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-60 0 text-white px-4 py-2rounded-md hover:bg-blue-70 0 transition-colors"
               aria-label="Try Again">
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="w-full bg-gray-20 0 text-gray-80 0 px-4 py-2rounded-md hover:bg-gray-30 0 transition-colors"
               aria-label="Reload Page">
                Reload Page
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6text-left">
                <summary className="cursor-pointer text-sm text-gray-50 0 hover:text-gray-7 0 0">
                  Error Details (Development)
                </summary>
                <div className="mt-2p-3bg-gray-10 0 rounded text-xs font-monooverflow-auto">
                  <div className="mb-2">
                    <strong>Erro, r:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for error boundary context
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { captureError, resetError };
};

// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

export default GlobalErrorBoundary;