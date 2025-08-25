import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error?: Error;
  errorInfo?: ErrorInfo;
=======
  error: Error | null;
  errorInfo: ErrorInfo | null;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
    this.setState({
      error,
      errorInfo
    });

<<<<<<< HEAD
    // Log error to external service (e.g., Sentry, LogRocket)
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
=======
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // In production, you might want to log to an error reporting service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            {/* Error Icon */}
            <div className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-zion-slate-light mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-zion-blue-light/10 rounded-lg border border-red-500/20">
                <summary className="text-red-400 font-medium cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="text-xs text-red-300 font-mono">
                  <p className="mb-2">
                    <strong>Error:</strong> {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <p>
                      <strong>Component Stack:</strong> {this.state.errorInfo.componentStack}
                    </p>
=======
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Try Again
              </button>
              
              <Link
                to="/"
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Go Home
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <p className="text-gray-400 mb-2">Need immediate assistance?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  📧 kleber@ziontechgroup.com
                </a>
                <a 
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
            </div>

            {/* Development Details */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-8 text-left bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
                <summary className="text-cyan-400 cursor-pointer font-semibold mb-2">
                  Development Details (Click to expand)
                </summary>
                <div className="text-sm text-gray-400 space-y-2">
                  <div>
                    <strong>Error:</strong> {this.state.error.toString()}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-2 p-2 bg-gray-900/50 rounded text-xs overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
                  )}
                </div>
              </details>
            )}
<<<<<<< HEAD

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              
              <Button
                variant="outline"
                onClick={this.handleGoHome}
                className="w-full border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan hover:text-white"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </Button>
            </div>

            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t border-zion-blue-light/20">
              <p className="text-sm text-zion-slate-light mb-2">
                Still having issues?
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="text-zion-cyan hover:text-white transition-colors text-sm"
              >
                Contact Support
              </a>
            </div>

            {/* Error ID for Support */}
            {this.state.error && (
              <div className="mt-4 text-xs text-gray-500">
                Error ID: {this.state.error.name}-{Date.now()}
              </div>
            )}
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
          </div>
        </div>
      );
    }

    return this.props.children;
  }
<<<<<<< HEAD
}

// Hook for functional components to trigger error boundary
export const useErrorHandler = () => {
  return (error: Error) => {
    throw error;
  };
};

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};
=======
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f698
