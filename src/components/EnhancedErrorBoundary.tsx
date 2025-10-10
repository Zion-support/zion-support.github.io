import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
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
      errorInfo
    });

    // Log error to analytics or error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // You can integrate with error reporting services here
    // Example: Sentry.captureException(error, { extra: errorInfo });
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>

              <Link
                to="/"
                className="w-full bg-white/10 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>

              <a
                href="mailto:support@ziontechgroup.com"
                className="w-full bg-white/5 text-gray-300 font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-gray-400 cursor-pointer hover:text-white transition-colors">
                  Error Details (Development)
                </summary>
                <div className="mt-4 p-4 bg-black/50 rounded-lg text-sm text-red-400 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="mt-1 whitespace-pre-wrap">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;