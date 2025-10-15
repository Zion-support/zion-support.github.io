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
      console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
    }

    // Here you could send error to logging service
    // Example: logErrorToService(error, errorInfo, this.state.errorId);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Bug className="w-12 h-12 text-red-400" />
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
            
            {this.state.error && (
              <details className="text-left bg-slate-800/50 rounded-lg p-6 mb-8">
                <summary className="text-red-400 cursor-pointer mb-4 text-lg font-semibold">
                  Error Details
                </summary>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2">Error Message:</h3>
                    <pre className="text-sm text-gray-300 bg-slate-900/50 rounded p-3 overflow-auto">
                      {this.state.error.message}
                    </pre>
                  </div>
                  
                  {this.state.errorInfo && (
                    <div>
                      <h3 className="text-white font-semibold mb-2">Component Stack:</h3>
                      <pre className="text-sm text-gray-300 bg-slate-900/50 rounded p-3 overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500">
                    Error ID: {this.state.errorId}
                  </div>
                </div>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="px-8 py-4 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;