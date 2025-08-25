import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Mail, 
  Bug, 
  ArrowLeft,
  Zap,
  Shield
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
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
      errorId: ErrorBoundary.generateErrorId()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    try {
      // Example: Log to external service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId
        });
      }

      // You can also send to your own error logging service
      // this.sendErrorToServer(error, errorInfo);
    } catch (loggingError) {
      // Silently fail if logging fails
      console.warn('Failed to log error:', loggingError);
    }
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const errorReport = {
      errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    // Open email client with error report
    const subject = encodeURIComponent(`Error Report - ${errorId}`);
    const body = encodeURIComponent(JSON.stringify(errorReport, null, 2));
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-cyan-400 cursor-pointer hover:text-cyan-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/30 rounded-lg p-4 text-sm font-mono text-gray-300 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error ID:</strong> {this.state.errorId}
                  </div>
                  <div className="mb-2">
                    <strong>Message:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            {/* Error ID for Support */}
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400 mb-2">
                Error Reference ID:
              </p>
              <code className="text-cyan-400 font-mono text-lg">
                {this.state.errorId}
              </code>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
              <button
                onClick={this.handleReportError}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Bug className="w-4 h-4" />
                <span>Report This Error</span>
              </button>

              <Link
                to="/contact"
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Support</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Secure & Reliable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>24/7 Monitoring</span>
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

export default ErrorBoundary;