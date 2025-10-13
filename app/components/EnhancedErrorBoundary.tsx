import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import ModernLoadingSpinner from './ModernLoadingSpinner';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  isRetrying: boolean;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryTimeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      isRetrying: false,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to monitoring service
    this.logErrorToService(error, errorInfo);
  }

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        retryCount: this.state.retryCount,
      };

      // Send to error reporting service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
        });
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Error Boundary caught an error:', errorData);
      }
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  handleRetry = () => {
    this.setState({ isRetrying: true });
    
    // Simulate retry delay
    this.retryTimeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        isRetrying: false,
        retryCount: this.state.retryCount + 1,
      });
    }, 1000);
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      isRetrying: false,
      retryCount: 0,
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportIssue = () => {
    const errorDetails = {
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    const subject = encodeURIComponent('Error Report - Zion Tech Group Website');
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorDetails, null, 2)}

Please describe what you were doing when this error occurred:
    `);

    window.open(`mailto:kleber@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.isRetrying) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <ModernLoadingSpinner size="lg" text="Retrying..." fullScreen />
        </div>
      );
    }

    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              {/* Error Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 mb-6 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-left bg-black/20 rounded-lg p-4">
                  <summary className="text-cyan-400 cursor-pointer font-medium mb-2">
                    Error Details (Development)
                  </summary>
                  <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto">
                    {this.state.error.message}
                    {this.state.error.stack && `\n\nStack Trace:\n${this.state.error.stack}`}
                  </pre>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                >
                  <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
                  Try Again
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Go Home
                </button>

                <button
                  onClick={this.handleReportIssue}
                  className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Report Issue
                </button>
              </div>

              {/* Retry Count */}
              {this.state.retryCount > 0 && (
                <p className="text-sm text-gray-400 mt-4">
                  Retry attempts: {this.state.retryCount}
                </p>
              )}

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-gray-400 mb-2">
                  Need immediate assistance?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    +1 (302) 464-0950
                  </a>
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