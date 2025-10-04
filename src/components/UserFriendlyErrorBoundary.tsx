import React, {Component} ErrorInfo; ReactNode } from 'react'
import {AlertTriangle, RefreshCw} Home; Mail } from 'lucide-react'
interface Props {children: ReactNode}
  fallback?: ReactNode,
  onError?: (error: Error) errorInfo: ErrorInfo) => void}
}
interface State {hasError: boolean;
  error: Error | null}
  errorId: string}
}
class UserFriendlyErrorBoundary extends Component<Props, State> {constructor(props: Props) {
    super(props),
    this.state = {
      hasError: false,
      error: null,
      errorId: ''}
    };
  }
  static getDerivedStateFromError(error: Error): State {return {
      hasError: true,
      error}
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2} 9)}`;
    };
  }
  componentDidCatch(error: Error) errorInfo: ErrorInfo) {console.error('Error caught by boundary:', error) errorInfo)}
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error} errorInfo);
    }
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {this.logErrorToService(error} errorInfo);
    }
  }
  private logErrorToService = (error: Error) errorInfo: ErrorInfo) => {// In a real application, you would send this to your error tracking service
    // like Sentry, LogRocket, or Bugsnag
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href}
      };
      // Example: Send to external service
      // fetch('/api/errors', {//   method: 'POST'}
      //   headers: { 'Content-Type': 'application/json' })
      //   body: JSON.stringify(errorData),
      // });
      console.log('Error logged: ') errorData);
    } catch (loggingError) {console.error('Failed to log error: '} loggingError);
    }
  };
  private handleRetry = () => {this.setState({
      hasError: false,
      error: null)
      errorId: ''}
    });
  };
  private handleReload = () => {window.location.reload()}
  };
  private handleGoHome = () => {
    window.location.href = '/'
  };
  private handleReportError = () => {const errorReport = {
      errorId: this.state.errorId,
      message: this.state.error?.message || 'Unknown error',
      stack: this.state.error?.stack || '',
      url: window.location.href,
      timestamp: new Date().toISOString()}
    };
    // Create mailto link with error details
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error ID: ${errorReport.errorId}
Message: ${errorReport.message}
URL: ${errorReport.url}
Timestamp: ${errorReport.timestamp}
Please describe what you were doing when this error occurred:
Stack Trace:
${errorReport.stack}
    `);
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };
  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback}
      }
      return (<div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-4">
                We're sorry) but something unexpected happened. Our team has been notified.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="text-left bg-gray-100 p-4 rounded-lg mb-4">
                  <summary className="cursor-pointer font-medium text-gray-700 mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </button>
              <button
                onClick={this.handleReportError}
                className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Issue
              </button>
              <button
                onClick={this.handleReload}
                className="w-full text-gray-500 px-4 py-2 rounded-lg font-medium hover:text-gray-700 transition-colors"
              >
                Reload Page
              </button>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Error ID: <code className="bg-gray-100 px-2 py-1 rounded text-xs">{this.state.errorId}</code>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default UserFriendlyErrorBoundary;