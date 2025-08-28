import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  Shield, 
  Zap 
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    if (error && errorInfo) {
      const errorReport = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // In production, send to error reporting service
      console.log('Error Report:', errorReport);
      
      // For now, just show an alert
      alert(`Error reported with ID: ${errorId}\n\nPlease contact support with this ID.`);
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6"
            >
              <AlertTriangle className="w-10 h-10 text-white" />
            </motion.div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error ID */}
            {this.state.errorId && (
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <code className="text-cyan-400 font-mono text-sm break-all">
                  {this.state.errorId}
                </code>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            </div>

            {/* Report Error Button */}
            <button
              onClick={this.handleReportError}
              className="flex items-center justify-center w-full px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-300 hover:text-red-200 font-semibold rounded-xl transition-all duration-300"
            >
              <Bug className="w-5 h-5 mr-2" />
              Report This Error
            </button>

            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && this.state.error && this.props.showDetails && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-red-400 hover:text-red-300 font-semibold mb-2">
                  Show Error Details (Development Only)
                </summary>
                <div className="bg-black/50 rounded-lg p-4 text-sm font-mono text-red-300 overflow-auto max-h-64">
                  <div className="mb-4">
                    <strong>Error Message:</strong>
                    <div className="mt-1 text-red-200">{this.state.error.message}</div>
                  </div>
                  
                  {this.state.error.stack && (
                    <div className="mb-4">
                      <strong>Stack Trace:</strong>
                      <div className="mt-1 text-red-200 whitespace-pre-wrap">{this.state.error.stack}</div>
                    </div>
                  )}
                  
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <div className="mt-1 text-red-200 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</div>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Helpful Tips */}
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                What you can try:
              </h3>
              <ul className="text-gray-300 text-sm space-y-2 text-left">
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Refresh the page and try again
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Clear your browser cache and cookies
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Try using a different browser
                </li>
                <li className="flex items-start">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Contact support if the problem persists
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
