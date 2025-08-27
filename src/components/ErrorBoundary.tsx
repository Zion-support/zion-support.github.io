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

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Log error to analytics service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong.</h2>
            <p className="text-zion-slate-light text-lg mb-6">
              We're sorry for the inconvenience. Our team has been notified and is working to fix the issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="text-left bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-6 text-red-300 text-sm overflow-auto max-h-48">
                <h3 className="font-semibold mb-2">Error Details:</h3>
                <p className="font-mono break-all">{this.state.error.toString()}</p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="mt-2 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="h-5 w-5 mr-2" /> Try Again
              </button>
              <Link
                to="/"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-6 py-3 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium text-base"
              >
                <Home className="h-5 w-5 mr-2" /> Go to Homepage
              </Link>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 mt-4"
            >
              <Mail className="h-4 w-4 mr-2" /> Contact Support
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
