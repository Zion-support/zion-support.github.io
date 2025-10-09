import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

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

class ComprehensiveErrorBoundary extends Component<Props, State> {
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
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_id: this.state.errorId,
            error_stack: error.stack,
            component_stack: errorInfo.componentStack
          }
        });
      }

      // Send to custom error reporting service
      if (typeof window !== 'undefined' && 'fetch' in window) {
        fetch('/api/error-reporting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            errorId: this.state.errorId,
            message: error.message,
            stack: error.stack,
            componentStack: errorInfo.componentStack,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString()
          })
        }).catch(() => {
          // Silently fail if error reporting service is unavailable
        });
      }
    } catch (reportingError) {
      // Silently fail if error reporting fails
      console.warn('Failed to report error:', reportingError);
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

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    const subject = `Error Report - ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    
    window.open(`mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800/90 backdrop-blur-lg rounded-2xl p-8 border border-red-400/30 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-slate-900/50 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Message:</strong> {this.state.error.message}
                  </p>
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Error ID:</strong> {this.state.errorId}
                  </p>
                  {this.state.error.stack && (
                    <details className="text-xs text-gray-400">
                      <summary className="cursor-pointer hover:text-gray-300">Stack Trace</summary>
                      <pre className="mt-2 whitespace-pre-wrap overflow-auto max-h-32">
                        {this.state.error.stack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="flex items-center justify-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 mb-4">
                  If this problem persists, please contact our support team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center justify-center px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </a>
                  
                  <button
                    onClick={this.handleReportError}
                    className="flex items-center justify-center px-4 py-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Report Error
                  </button>
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

export default ComprehensiveErrorBoundary;