import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home, AlertTriangle } from 'lucide-react';
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
      errorInfo,
    });
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-400" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-8 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-sm text-red-300 overflow-auto">{this.state.error.toString()}</pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-400 mt-2 overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Try Again
                </button>
                <Link
                  to="/"
                  className="border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </div>

              <div className="text-gray-400 text-sm">
                <p className="mb-2">Still having issues? Contact our support team:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                    kleber@ziontechgroup.com
                  </a>
                  <span className="hidden sm:inline text-gray-500">•</span>
                  <span>+1 302 464 0950</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;

