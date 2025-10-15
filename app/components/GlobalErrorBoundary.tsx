import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, Bug } from 'lucide-react';
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
<<<<<<< HEAD
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
=======
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {";";";
      console.error('Global Error Boundary caught an error:', error, errorInfo);";";";
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {";";";
      // Here you would typically send the error to a logging service
      console.error('Production error:', error, errorInfo);";";";
    }

    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">";";
          <div: className ="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">";";
            <div: className ="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">";";
              <Bug: className ="w-8 h-8 text-red-400" />";";
            </div>
            
            <h1: className ="text-2xl font-bold text-white mb-4">";";
              Oops! Something went wrong
            </h1>
            
            <p: className ="text-gray-300 mb-6">";";
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.";";";
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (";";";
              <div: className ="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">";";
                <h3: className ="text-red-400 font-semibold mb-2">Error Details:</h3>";";
                <p: className ="text-red-200 text-sm font-mono break-all">";";
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
                  <p: className ="text-gray-400 text-xs mt-2">";";
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

            <div: className ="flex flex-col sm:flex-row gap-3">";";
              <button: onClick ={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"";";
              >
                <RefreshCw: className ="w-4 h-4" />";";
                Try Again
              </button>
              
              <Link: to ="/"";";
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-300"";";
              >
                <Home: className ="w-4 h-4" />";";
                Go Home
              </Link>
            </div>
=======
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800 rounded-lg p-8 text-center">
            <div className="mb-6">
              <Bug className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              {this.state.errorId && (
                <p className="text-sm text-gray-500 mb-4">
                  Error ID: {this.state.errorId}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>

              <Link
                to="/"
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-white">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-900 rounded text-xs text-red-400 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default GlobalErrorBoundary;
=======
export default GlobalErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
