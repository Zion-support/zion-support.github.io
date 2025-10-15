import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced error boundary caught:', error, errorInfo);
    }
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorId: this.state.errorId,
      userId: this.getUserId(),
    };
    
    // Send to error monitoring service
    this.sendToErrorService(errorData);
    
    // Store in localStorage for debugging
    this.storeErrorLocally(errorData);
  };

  private getUserId = (): string | null => {
    try {
      return localStorage.getItem('userId') || 'anonymous';
    } catch {
      return 'anonymous';
    }
  };

  private sendToErrorService = (errorData: any) => {
    // Example: Send to your error monitoring service
    // fetch('/api/error-report', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // }).catch(() => {
    //   // Fallback to local storage if service is unavailable
    //   this.storeErrorLocally(errorData);
    // });
  };

  private storeErrorLocally = (errorData: any) => {
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingErrors.push(errorData);
      localStorage.setItem('errorLogs', JSON.stringify(existingErrors.slice(-20))); // Keep last 20 errors
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
          <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8 mx-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mb-6 text-left">
                  <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                    Error Details (Development)
                  </summary>
                  <div className="bg-gray-100 p-3 rounded text-xs text-gray-600 overflow-auto max-h-32">
                    <div className="font-mono">
                      <div><strong>Error:</strong> {this.state.error.message}</div>
                      <div><strong>Stack:</strong></div>
                      <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                    </div>
                  </div>
                </details>
              )}

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Reload Page
                </button>
                
                <a
                  href="/"
                  className="block w-full text-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  Go to Homepage
                </a>
              </div>

              {this.state.errorId && (
                <p className="mt-4 text-xs text-gray-500">
                  Error ID: {this.state.errorId}
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;