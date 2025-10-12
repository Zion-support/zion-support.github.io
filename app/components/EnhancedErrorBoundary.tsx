'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
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
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Report error to monitoring service
    this.reportError(error, errorInfo);

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Report to analytics/monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          stack: error.stack,
          componentStack: errorInfo.componentStack
        }
      });
    }

    // Report to custom error tracking service
    try {
      // This would typically send to a service like Sentry, LogRocket, etc.
      console.log('Error reported:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 bg-opacity-20 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </button>
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center px-6 py-3 border border-gray-400 text-gray-300 hover:bg-gray-700 font-semibold rounded-lg transition-colors duration-200"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Reload Page
                </button>
              </div>

              {process.env.NODE_ENV === 'development' && this.props.showDetails && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-gray-300 hover:text-white font-semibold mb-4">
                    <Bug className="w-4 h-4 inline mr-2" />
                    Error Details (Development Only)
                  </summary>
                  <div className="bg-black bg-opacity-50 rounded-lg p-4 text-sm font-mono">
                    <div className="mb-4">
                      <strong className="text-red-400">Error ID:</strong> {this.state.errorId}
                    </div>
                    <div className="mb-4">
                      <strong className="text-red-400">Error Message:</strong>
                      <div className="text-gray-300 mt-1 break-all">
                        {this.state.error?.message}
                      </div>
                    </div>
                    <div className="mb-4">
                      <strong className="text-red-400">Stack Trace:</strong>
                      <pre className="text-gray-300 mt-1 whitespace-pre-wrap break-all text-xs">
                        {this.state.error?.stack}
                      </pre>
                    </div>
                    <div>
                      <strong className="text-red-400">Component Stack:</strong>
                      <pre className="text-gray-300 mt-1 whitespace-pre-wrap break-all text-xs">
                        {this.state.errorInfo?.componentStack}
                      </pre>
                    </div>
                  </div>
                </details>
              )}

              <div className="mt-6 text-sm text-gray-400">
                <p>If this problem persists, please contact our support team:</p>
                <p className="mt-2">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    kleber@ziontechgroup.com
                  </a>
                  {' • '}
                  <a
                    href="tel:+13024640950"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    +1 (302) 464-0950
                  </a>
                </p>
                <p className="mt-2">
                  Error ID: {this.state.errorId}
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