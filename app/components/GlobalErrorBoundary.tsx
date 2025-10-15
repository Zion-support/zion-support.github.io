import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a logging service
      }
  }

  render() {
    if (this.state.hasError) {
      const Component = () => {
  return (div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {this.state.errorId && (
              <div className="mb-6 p-4 bg-slate-700 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <code className="text-purple-400 font-mono text-sm">{this.state.errorId}</code>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-slate-700 rounded-lg text-left">
                <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development Only):
                </h3>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-gray-400 mt-2 whitespace-pre-wrap overflow-auto max-h-40">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reload Page
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors font-medium"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-sm text-gray-400">
                If this problem persists, please contact our support team at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;