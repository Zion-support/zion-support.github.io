import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, MessageCircle, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
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
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm border border-red-400/20 rounded-2xl p-8 text-center">
              {/* Error Icon */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 rounded-full blur opacity-30 animate-pulse"></div>
              </div>

              {/* Error Message */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified 
                and we're working to fix this issue.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
                    Error Details (Development)
                  </h3>
                  <div className="text-sm text-gray-300 space-y-2">
                    <div>
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    <div>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack Trace:</strong>
                        <pre className="mt-1 text-xs text-gray-400 overflow-auto max-h-32">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Try Again
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="group inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Go Home
                </button>

                <button
                  onClick={this.handleReload}
                  className="group inline-flex items-center px-6 py-3 border-2 border-gray-400 text-gray-400 font-semibold rounded-lg hover:bg-gray-400 hover:text-slate-900 transition-all duration-300"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Reload Page
                </button>
              </div>

              {/* Contact Support */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-4">
                  If this problem persists, please contact our support team.
                </p>
                <div className="flex justify-center space-x-6">
                  <a
                    href="mailto:support@ziontechgroup.com"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    support@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>

              {/* Error ID for Support */}
              <div className="mt-4 text-xs text-gray-500">
                Error ID: {this.state.errorId}
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