import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
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
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
          <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚨</div>
              <h1 className="text-3xl font-bold text-red-400 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="space-y-4">
              {this.state.error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded p-4">
                  <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                  <pre className="text-sm text-red-300 whitespace-pre-wrap overflow-x-auto">
                    {this.state.error.message}
                  </pre>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.location.reload()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  🔄 Reload Page
                </button>
                
                <button
                  onClick={() => window.history.back()}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Go Back
                </button>
              </div>

              <div className="text-center text-sm text-gray-400">
                If this problem persists, please contact our support team.
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;