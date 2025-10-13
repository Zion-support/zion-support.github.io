import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
<<<<<<< HEAD
    children: ReactNode
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  }
interface State {
    hasError: boolean
  error?: Error,
  errorInfo?: ErrorInfo
  }
class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props),
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }
=======
  children: ReactNode
}
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void};
interface State {
  hasError: boolean
}
  error?: Error;
  errorInfo?: ErrorInfo};
class GlobalErrorBoundary extends Component<Props, State> {;
constructor(props: Props) {
    super(props);
    this.state = { hasError: false }};
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
<<<<<<< HEAD
    console.error('Error caught by boundary:', error, errorInfo)
  }
    // Call onError callback if provided
    if (this.props.onError) {
    this.props.onError(error, errorInfo)
  }
    // In production, you might want to send this to an error reporting service
    if (process.env['NODE_ENV'] === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }
=======
      // console.error removed for production
}
    // Call onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)}
    // In production, you might want to send this to an error reporting service
    if (process.env['NODE_ENV'] === 'production') {
      // Example: Send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo })};
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
<<<<<<< HEAD
        return this.props.fallback
  }
=======
        return this.props.fallback}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="text-left bg-black/20 rounded-lg p-4 mb-6">
                <summary className="cursor-pointer text-cyan-400 font-medium mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-400 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
<<<<<<< HEAD
            )}
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Refresh Page</span>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="w-full bg-purple-600 hover: bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Try Again</span>
              <a
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Go Home</span>
            </div>
          </div>
        </div>
      ),
    }
    return this.props.children;
  }
}
export { GlobalErrorBoundary }</a>
  </button>
  </button>
=======
            )};
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })};
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again
              </button>
              <a href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Go Home
              </a>
            </div>
          </div>
        </div>
      )};
    return this.props.children};
};
export { GlobalErrorBoundary }
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
