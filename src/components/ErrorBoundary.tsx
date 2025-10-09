'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

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
  errorId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

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
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Report error to analytics
    this.reportError(error, errorInfo);

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Report to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_parameter_1: error.stack,
        custom_parameter_2: errorInfo.componentStack
      });
    }

    // Report to console for debugging
    console.error('Error reported:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId
    });
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null
      });
    } else {
      // Redirect to home page after max retries
      window.location.href = '/';
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const errorDetails = {
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Open email client with error details
    const subject = `Error Report - ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800/90 backdrop-blur-lg rounded-2xl p-8 border border-red-400/20 shadow-2xl">
            <div className="text-center">
              {/* Error Icon */}
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {/* Error ID */}
              {this.state.errorId && (
                <div className="bg-slate-700/50 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-400 mb-1">Error ID:</p>
                  <p className="text-cyan-400 font-mono text-sm">{this.state.errorId}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  disabled={this.retryCount >= this.maxRetries}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {this.retryCount >= this.maxRetries ? 'Max Retries Reached' : `Try Again (${this.maxRetries - this.retryCount} left)`}
                </button>

                <button
                  onClick={this.handleReload}
                  className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300"
                >
                  Reload Page
                </button>

                <button
                  onClick={this.handleReportBug}
                  className="px-6 py-3 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-colors duration-300"
                >
                  Report Bug
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-8 text-sm text-gray-400">
                <p className="mb-2">If this problem persists, please contact our support team:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>

              {/* Technical Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.props.showDetails && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
                    Technical Details (Development)
                  </summary>
                  <div className="mt-4 bg-slate-900/50 rounded-lg p-4 overflow-auto">
                    <pre className="text-xs text-red-300 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                    {this.state.errorInfo && (
                      <pre className="text-xs text-yellow-300 whitespace-pre-wrap mt-4">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;