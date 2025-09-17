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
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({ errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Log to error reporting service
    if (typeof window !== 'undefined') {
      // Google Analytics error tracking
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.toString(),
          fatal: false
        });
      }
      
      // Sentry error tracking (if available)
      if (window.Sentry) {
        window.Sentry.captureException(error, {
          contexts: { react: { componentStack: errorInfo.componentStack } }
        });
      }
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-red-700">
          <div className="text-center text-white p-8 max-w-md">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-6 text-gray-200">We're sorry, but something unexpected happened. Our team has been notified.</p>
            <div className="space-y-3">
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-white text-red-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Reload Page
              </button>
              <button 
                onClick={() => window.history.back()}
                className="w-full bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Go Back
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-300 hover:text-white">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs bg-black bg-opacity-50 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
