import React, { Component, ReactNode } from 'react',
interface Props {
  children: ReactNode,
  fallback?: ReactNode, }

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo, }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }, }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true; error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback, }

      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We apologize for the inconvenience. Our team has been notified.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Reload Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Go Back
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left bg-red-900/20 p-4 rounded border border-red-500/20">
                <summary className="cursor-pointer text-red-400 font-semibold">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-300 whitespace-pre-wrap">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );

    return this.props.children, }
}