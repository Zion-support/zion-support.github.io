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
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Send error to monitoring service
    this.reportError(error, errorInfo);
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    // like Sentry, LogRocket, or Bugsnag
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: 'anonymous', // You would get this from your auth context
    };

    // Example: Send to analytics or monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId
        }
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Report');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Report:', errorReport);
      console.groupEnd();
    }
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full">
              <AlertTriangle className="w-10 h-10 text-red-400" />
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