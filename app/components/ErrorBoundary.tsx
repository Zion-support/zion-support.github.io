'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-md rounded-2xl border border-red-500/20 p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-xs text-red-300 whitespace-pre-wrap break-words">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-red-300 whitespace-pre-wrap break-words mt-2">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-3">
                If this problem persists, please contact our support team:
              </p>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
