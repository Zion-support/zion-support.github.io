import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class UserFriendlyErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
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
    this.setState({
      error,
      errorInfo
    });

    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by UserFriendlyErrorBoundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        errorId: this.state.errorId,
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      // Use errorData for reporting
      if (process.env.NODE_ENV === 'development') {
        console.log('Error data:', errorData);
      }

      // Send to error reporting service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_id: this.state.errorId
          }
        });
      }
    } catch (reportingError) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to report error:', reportingError);
      }
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportBug = () => {
    const errorDetails = this.state.error ? {
      message: this.state.error.message,
      stack: this.state.error.stack,
      errorId: this.state.errorId
    } : {};

    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=Bug Report - Error ID: ${this.state.errorId}&body=${encodeURIComponent(JSON.stringify(errorDetails, null, 2))}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
          <div className="max-w-lg w-full bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 text-center border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're sorry, but something unexpected happened while loading this page. 
              Our team has been automatically notified and is working to fix it.
            </p>

            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-400 mb-2">Error ID:</p>
              <code className="text-cyan-400 font-mono text-sm">{this.state.errorId}</code>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-white mb-3 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Technical Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-black/20 rounded-lg text-xs font-mono overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong className="text-red-400">Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong className="text-red-400">Stack:</strong>
                      <pre className="whitespace-pre-wrap text-gray-300">{this.state.error.stack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold border border-white/20"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>

            <button
              onClick={this.handleReportBug}
              className="flex items-center justify-center px-4 py-2 mt-4 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Report this issue
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default UserFriendlyErrorBoundary;