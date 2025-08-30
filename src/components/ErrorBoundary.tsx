import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKey?: string | number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: this.generateErrorId()
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      errorId: this.generateErrorId()
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Send error to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  componentDidUpdate(prevProps: Props) {
    // Reset error state when resetKey changes
    if (prevProps.resetKey !== this.props.resetKey) {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: this.generateErrorId()
      });
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError(error: Error, errorInfo: ErrorInfo) {
    try {
      // Send to error reporting service (e.g., Sentry, LogRocket, etc.)
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(error, {
          contexts: {
            react: {
              componentStack: errorInfo.componentStack
            }
          },
          tags: {
            errorId: this.state.errorId,
            component: 'ErrorBoundary'
          }
        });
      }

      // Send to custom error endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          errorId: this.state.errorId,
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {
        // Silently fail if error reporting fails
      });
    } catch (reportingError) {
      // Silently fail if error reporting fails
      console.error('Failed to report error:', reportingError);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: this.generateErrorId()
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleReportBug = () => {
    const errorDetails = `
Error ID: ${this.state.errorId}
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
    `.trim();

    // Copy error details to clipboard
    navigator.clipboard.writeText(errorDetails).then(() => {
      alert('Error details copied to clipboard. Please report this to our support team.');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorDetails;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Error details copied to clipboard. Please report this to our support team.');
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="w-24 h-24 mx-auto mb-8 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error ID for support */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-400 mb-2">Error ID for support:</p>
              <code className="text-cyan-400 font-mono text-sm break-all">
                {this.state.errorId}
              </code>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>

              <button
                onClick={this.handleGoBack}
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>

              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            {/* Report Bug Button */}
            <button
              onClick={this.handleReportBug}
              className="mt-6 px-6 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <Bug className="w-4 h-4" />
              Report This Issue
            </button>

            {/* Technical Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">
                  Technical Details (Development)
                </summary>
                <div className="mt-4 p-4 bg-gray-800/50 rounded-lg text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error:</h3>
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                    {this.state.error.message}
                  </pre>
                  
                  {this.state.error.stack && (
                    <>
                      <h3 className="text-red-400 font-semibold mb-2 mt-4">Stack Trace:</h3>
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                        {this.state.error.stack}
                      </pre>
                    </>
                  )}
                  
                  {this.state.errorInfo?.componentStack && (
                    <>
                      <h3 className="text-red-400 font-semibold mb-2 mt-4">Component Stack:</h3>
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </>
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

// Hook for functional components to trigger error boundary
export const useErrorHandler = () => {
  const throwError = (error: Error) => {
    throw error;
  };

  const handleAsyncError = (promise: Promise<any>) => {
    return promise.catch((error) => {
      throwError(error);
    });
  };

  return { throwError, handleAsyncError };
};

// HOC for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  return React.forwardRef<any, P>((props, ref) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} ref={ref} />
    </ErrorBoundary>
  ));
};
