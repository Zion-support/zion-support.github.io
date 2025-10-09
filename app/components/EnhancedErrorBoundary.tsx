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
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Call custom error handler
    this.props.onError?.(error, errorInfo);

    // Report to error tracking service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1,
      }));
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const { error, errorInfo } = this.state;
    const errorReport = {
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Send error report
    const subject = encodeURIComponent(`Error Report - ${error?.message}`);
    const body = encodeURIComponent(JSON.stringify(errorReport, null, 2));
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, retryCount } = this.state;
      const canRetry = retryCount < this.maxRetries;

      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
              {/* Error Icon */}
              <div className="mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-600 text-lg">
                  We encountered an unexpected error. Our team has been notified and is working to fix it.
                </p>
              </div>

              {/* Error Details (Development only) */}
              {process.env.NODE_ENV === 'development' && error && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Error Details:</h3>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                    {error.message}
                  </pre>
                  {error.stack && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                        Stack Trace
                      </summary>
                      <pre className="text-xs text-gray-600 mt-2 whitespace-pre-wrap">
                        {error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {canRetry && (
                    <button
                      onClick={this.handleRetry}
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Try Again ({this.maxRetries - retryCount} attempts left)
                    </button>
                  )}
                  
                  <button
                    onClick={this.handleReload}
                    className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reload Page
                  </button>
                  
                  <button
                    onClick={this.handleGoHome}
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </button>
                </div>

                <button
                  onClick={this.handleReportError}
                  className="inline-flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Report this error
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
                <p className="text-blue-800 text-sm">
                  If this problem persists, please contact our support team at{' '}
                  <a href="mailto:support@ziontechgroup.com" className="underline hover:no-underline">
                    support@ziontechgroup.com
                  </a>{' '}
                  or call us at{' '}
                  <a href="tel:+13024640950" className="underline hover:no-underline">
                    (302) 464-0950
                  </a>
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

export default EnhancedErrorBoundary;