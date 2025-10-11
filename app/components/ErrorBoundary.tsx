import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="cyber-card rounded-2xl p-8 text-center">
              <div className="mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-300 mb-6">
                  We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <p className="text-red-300 text-sm font-mono break-all">
                    {this.state.error.message}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-red-400 text-sm cursor-pointer">
                        Stack Trace
                      </summary>
                      <pre className="text-red-300 text-xs mt-2 overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </button>
                <Link
                  to="/"
                  className="flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-gray-400 text-sm">
                  Need help? Contact us at{' '}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
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

export default ErrorBoundary;