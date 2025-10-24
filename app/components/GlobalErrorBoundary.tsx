import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { AlertTriangle, RefreshCw, Home, Phone, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (_error: Error, _errorInfo: ErrorInfo) => void;
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
      errorId: `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error for monitoring in production
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error reporting service
      // Example: errorReportingService.captureException(error, { extra: errorInfo })
      console.error('Global Error Boundary caught an error:', error, errorInfo);
    }
    
    this.props.onError?.(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined, errorId: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-lg w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2b30

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (_error: Error, _errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error caught by boundary:', error, errorInfo);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">Need help? Contact our support team:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors px-4 py-2 rounded-lg border border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Support</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors px-4 py-2 rounded-lg border border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;