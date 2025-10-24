'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to your error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can also send to external error reporting service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
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
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <AlertTriangle className="w-24 h-24 text-red-400 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 group"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details (Development Only)</h3>
                <pre className="text-red-300 text-sm overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;