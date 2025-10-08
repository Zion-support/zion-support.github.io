import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    this.maxRetries = props.maxRetries || 3;
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, enableErrorReporting = true } = this.props;
    
    // Update state with error details
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }

    // Report error if enabled
    if (enableErrorReporting) {
      this.reportError(error, errorInfo);
    }

    // Log error for debugging
    console.error('Error caught by EnhancedErrorBoundary:', error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    // Send to error reporting service (replace with your service)
    try {
      // Example: Send to external service
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(err => console.warn('Failed to report error:', err));
    } catch (reportingError) {
      console.warn('Error reporting failed:', reportingError);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: 0
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
              </p>
            </div>

            {/* Error Details (for development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
                <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
                <p className="text-sm text-red-700 mb-2">
                  <strong>Message:</strong> {this.state.error.message}
                </p>
                <p className="text-sm text-red-700 mb-2">
                  <strong>Error ID:</strong> {this.state.errorId}
                </p>
                <p className="text-sm text-red-700">
                  <strong>Retry Count:</strong> {this.state.retryCount}/{this.maxRetries}
                </p>
                {this.state.error.stack && (
                  <details className="mt-2">
                    <summary className="text-sm text-red-700 cursor-pointer">Stack Trace</summary>
                    <pre className="text-xs text-red-600 mt-2 overflow-auto">
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              {this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              )}
              
              <button
                onClick={this.handleReset}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Reset
              </button>
              
              <button
                onClick={this.handleReload}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Reload Page
              </button>
            </div>

            {/* Support Information */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                If this problem continues, please contact our support team:
              </p>
              <div className="text-sm text-gray-600">
                <p>📞 +1 302 464 0950</p>
                <p>✉️ kleber@ziontechgroup.com</p>
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