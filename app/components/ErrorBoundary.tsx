'use client';'
import React, { Component, ErrorInfo, ReactNode } from 'react;'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react;'

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
    console.error('ErrorBoundary caught an error:', error, errorInfo);'
    this.setState({ error, errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return ()
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"></div>""
          <div className="max-w-md mx-auto text-center p-8"></div>""
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />""
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>""
            <p className="text-gray-300 mb-6">""
              We're sorry, but something unexpected happened. Please try refreshing the page.'
            </p>
            <div className="space-y-4"></div>""
              <button,
onClick={this.handleReset}
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors""
              >
                <RefreshCw className="w-4 h-4 mr-2" />""
                Try Again
              </button>
              <button,
onClick={() => window.location.href = '/'}'
                className="flex items-center justify-center w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors""
              >
                <Home className="w-4 h-4 mr-2" />""
                Go Home
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (')'
              <details className="mt-6 text-left">""
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">""
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-400 bg-gray-800 p-4 rounded overflow-auto">""
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