import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showErrorDetails?: boolean;
  enableErrorReporting?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId();
    
    this.setState({
      error,
      errorInfo,
      errorId
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service if enabled
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo, errorId);
    }

    // Log error to analytics if available
    this.logErrorToAnalytics(error, errorInfo);
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError(error: Error, errorInfo: ErrorInfo, errorId: string) {
    try {
      // Report to external error tracking service (e.g., Sentry, LogRocket)
      const errorReport = {
        id: errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      // Send to error reporting endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      }).catch(() => {
        // Fallback: store in localStorage for later reporting
        this.storeErrorLocally(errorReport);
      });
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  }

  private storeErrorLocally(errorReport: any) {
    try {
      const storedErrors = JSON.parse(localStorage.getItem('zion_error_reports') || '[]');
      storedErrors.push(errorReport);
      localStorage.setItem('zion_error_reports', JSON.stringify(storedErrors.slice(-10))); // Keep last 10
    } catch (storageError) {
      console.warn('Failed to store error locally:', storageError);
    }
  }

  private logErrorToAnalytics(error: Error, errorInfo: ErrorInfo) {
    try {
      // Google Analytics 4
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            component_stack: errorInfo.componentStack
          }
        });
      }

      // Google Analytics Universal
      if (typeof window !== 'undefined' && (window as any).ga) {
        (window as any).ga('send', 'exception', {
          exDescription: error.message,
          exFatal: false
        });
      }
    } catch (analyticsError) {
      console.warn('Failed to log error to analytics:', analyticsError);
    }
  }

  private retry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  private goHome = () => {
    window.location.href = '/';
  };

  private goBack = () => {
    window.history.back();
  };

  private copyErrorDetails = () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error || !errorInfo) return;

    const errorDetails = `
Error ID: ${errorId}
Error: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
User Agent: ${navigator.userAgent}
    `.trim();

    navigator.clipboard.writeText(errorDetails).then(() => {
      // Show success message
      const button = document.getElementById('copy-error-btn');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('bg-green-600');
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('bg-green-600');
        }, 2000);
      }
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorDetails;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
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
        <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-900/95 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-8">
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-400">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            {this.props.showErrorDetails && this.state.error && (
              <div className="mb-6 p-4 bg-slate-800/50 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Error Details</h3>
                <div className="text-sm text-gray-300 space-y-1">
                  <div><strong>Error ID:</strong> {this.state.errorId}</div>
                  <div><strong>Message:</strong> {this.state.error.message}</div>
                  {this.state.error.stack && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs text-gray-400 overflow-x-auto whitespace-pre-wrap">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.retry}
                className="flex-1 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
              >
                Try Again
              </button>
              
              <button
                onClick={this.goBack}
                className="flex-1 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                Go Back
              </button>
              
              <button
                onClick={this.goHome}
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                Go Home
              </button>
            </div>

            {/* Additional Actions */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              {this.props.showErrorDetails && this.state.error && (
                <button
                  id="copy-error-btn"
                  onClick={this.copyErrorDetails}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded transition-colors"
                >
                  Copy Error Details
                </button>
              )}
              
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded transition-colors"
              >
                Reload Page
              </button>
            </div>

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm mb-3">
                Still having issues? We're here to help.
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/docs"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="/faq"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Error Reporting Status */}
            {this.props.enableErrorReporting && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Error automatically reported to our team</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundaries
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for manual error reporting
export const useErrorReporting = () => {
  const reportError = (error: Error, context?: Record<string, any>) => {
    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      // Send to error reporting endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      }).catch(() => {
        console.warn('Failed to report error:', error);
      });
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

  return { reportError };
};
