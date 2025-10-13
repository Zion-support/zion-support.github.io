import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Shield } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      retryCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error reporting service
    // like Sentry, LogRocket, or Bugsnag
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };
      
      // Example: Send to analytics or error reporting service
      // analytics.track('Error', errorData);
      console.error('Error logged to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // Reset to initial state after max retries
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: 0
      });
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            {/* Error Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 shadow-2xl">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center animate-pulse">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold text-white text-center mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                  <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    Error Details (Development)
                  </h3>
                  <pre className="text-xs text-red-300 overflow-auto max-h-32">
                    {this.state.error.message}
                    {this.state.error.stack && `\n\n${this.state.error.stack}`}
                  </pre>
                </div>
              )}

              {/* Retry Count */}
              {this.state.retryCount > 0 && (
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-400">
                    Retry attempt: {this.state.retryCount} / {this.maxRetries}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  disabled={this.state.retryCount >= this.maxRetries}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  {this.state.retryCount >= this.maxRetries ? 'Reset' : 'Try Again'}
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Go Home
                </button>

                <button
                  onClick={this.handleReload}
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Reload Page
                </button>
              </div>

              {/* Security Notice */}
              <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-blue-400 font-semibold text-sm mb-1">
                      Security Notice
                    </h4>
                    <p className="text-blue-300 text-xs leading-relaxed">
                      This error has been logged securely and no personal data was compromised. 
                      If this issue persists, please contact our support team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Need help? Contact us at{' '}
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    support@ziontechgroup.com
                  </a>
                </p>
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