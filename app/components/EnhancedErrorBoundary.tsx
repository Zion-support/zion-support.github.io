import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Mail, ArrowLeft } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0
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
    // Enhanced error logging
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
        custom_map: {
          error_id: this.state.errorId,
          retry_count: this.state.retryCount
        }
      });
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState({ errorInfo });
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // Reset retry count and show error
      this.setState({ retryCount: 0 });
    }
  };

  handleGoBack = () => {
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-lg w-full bg-slate-800/50 backdrop-blur-lg rounded-xl p-8 border border-red-500/30 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 mx-auto">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-4">
              {this.state.retryCount > 0 ? 'Retry Failed' : 'Something went wrong'}
            </h1>

            <p className="text-gray-300 mb-6">
              {this.state.retryCount > 0
                ? `We've tried ${this.state.retryCount} times but couldn't recover. Please try refreshing the page.`
                : "We're sorry, but something unexpected happened. Please try refreshing the page."
              }
            </p>

            {this.state.errorId && (
              <div className="mb-6 p-3 bg-slate-700/50 rounded-lg">
                <p className="text-sm text-gray-400">Error ID: {this.state.errorId}</p>
                {this.state.retryCount > 0 && (
                  <p className="text-sm text-gray-400 mt-1">Retry attempts: {this.state.retryCount}</p>
                )}
              </div>
            )}

            <div className="space-y-3">
              {this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  aria-label="Try to recover from the error"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              )}

              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Refresh the page to try again"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh Page
              </button>

              <button
                onClick={this.handleGoBack}
                className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Go back to the previous page"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full border-2 border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700/50 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-gray-500/50"
                aria-label="Go back to the homepage"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>

              <a
                href={`mailto:kleber@ziontechgroup.com?subject=Error Report&body=Error ID: ${this.state.errorId}%0A%0APlease describe what you were doing when this error occurred:`}
                className="w-full border-2 border-cyan-500 text-cyan-300 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700/50 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Report this error via email"
              >
                <Mail className="w-5 h-5 mr-2" />
                Report Error
              </a>
            </div>

            {this.props.showDetails && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-red-400 cursor-pointer font-medium flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details
                </summary>
                <div className="mt-2 space-y-2">
                  <pre className="text-xs text-gray-400 bg-slate-900/50 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-400 bg-slate-900/50 p-3 rounded overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
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

export default EnhancedErrorBoundary;