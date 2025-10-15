import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
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
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Send to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as { gtag: Function }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          'error_stack': error.stack,
          'component_stack': errorInfo.componentStack
        }
      });
    }

    // Send to custom error reporting service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: error.message,
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
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportIssue = () => {
    const errorDetails = {
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report&body=${encodeURIComponent(
      `Error Details:\n${JSON.stringify(errorDetails, null, 2)}`
    )}`;

    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
          <div className="max-w-2xl w-full bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-8">
            <div className="text-center">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-slate-900 rounded p-4 text-xs text-red-300 font-mono overflow-auto">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div className="mb-2">
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                      </div>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <strong>Component Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {this.state.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                  </button>
                )}

                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>

                <button
                  onClick={this.handleReportIssue}
                  className="flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Report Issue
                </button>
              </div>

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2">
                  Need immediate assistance?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    📞 +1 (302) 464-0950
                  </a>
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    ✉️ support@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;