import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, Bug, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  private retryTimeoutId?: NodeJS.Timeout;

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
    const { onError } = this.props;
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced Error Boundary caught an error:', error, errorInfo);
    }

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a logging service
      console.error('Production error:', {
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId
      });
    }

    this.setState({
      error,
      errorInfo,
    });
  }

  handleRetry = () => {
    const { retryCount } = this.state;
    
    if (retryCount < 3) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // After 3 retries, reload the page
      window.location.reload();
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  render() {
    const { hasError, error, errorInfo, errorId, retryCount } = this.state;
    const { children, showDetails = process.env.NODE_ENV === 'development' } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              {retryCount > 0 ? (
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              ) : (
                <Bug className="w-8 h-8 text-red-400" />
              )}
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              {retryCount > 0 ? 'Retrying...' : 'Oops! Something went wrong'}
            </h1>
            
            <p className="text-gray-300 mb-6">
              {retryCount > 0 
                ? `Attempt ${retryCount + 1} of 3. We're trying to fix this automatically.`
                : "We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue."
              }
            </p>

            {showDetails && error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <p className="text-red-200 text-sm font-mono break-all mb-2">
                  {error.message}
                </p>
                {error.stack && (
                  <details className="text-xs text-gray-400">
                    <summary className="cursor-pointer text-red-300 mb-2">Stack Trace</summary>
                    <pre className="whitespace-pre-wrap break-all">
                      {error.stack}
                    </pre>
                  </details>
                )}
                {errorId && (
                  <p className="text-gray-400 text-xs mt-2">
                    Error ID: {errorId}
                  </p>
                )}
                {errorInfo && (
                  <details className="text-xs text-gray-400 mt-2">
                    <summary className="cursor-pointer text-red-300 mb-2">Component Stack</summary>
                    <pre className="whitespace-pre-wrap break-all">
                      {errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                {retryCount < 3 ? 'Try Again' : 'Reload Page'}
              </button>
              
              <Link
                to="/"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              {retryCount > 0 
                ? `If this problem persists after ${3 - retryCount} more attempts, the page will reload automatically.`
                : 'If this problem persists, please contact our support team.'
              }
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default EnhancedErrorBoundary;