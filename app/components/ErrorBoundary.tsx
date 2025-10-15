import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
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
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      }).catch(() => {
        // Silently fail if error reporting endpoint is not available
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-md w-full glass-effect p-8 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Oops! Something went wrong</h3>
            <p className="text-gray-300 mb-6">
              {this.state.error?.message || 'An unexpected error occurred. Our team has been notified.'}
            </p>
            <div className="space-y-3">
              <button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="btn-futuristic w-full"
                aria-label="Try to reload the page"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full px-4 py-2 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                aria-label="Go back to home page"
              >
                Go Home
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Error ID: {Date.now().toString(36)}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;