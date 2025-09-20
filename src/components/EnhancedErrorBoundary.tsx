import { useCallback  } from "react";
import React, { Component, ErrorInfo, ReactNode } from "react"
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
}
}

interface State {
  hasError: boolean,
  error: Error | null,
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}
}
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null;
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
  hasError: true,
      error,
}
}
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo;
    })
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }

    // Call custom error handler if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // In production, you might want to send this to an error reporting service;
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service;
      // errorReportingService.captureException(error, { extra: errorInfo })
    }
  }

  handleRetry = useCallback(handleRetry, [])
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null;
    })
  }
  handleReload = useCallback(handleReload, [])
    window.location.reload()
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-xl font-semibold mb-4">Error Details</h2>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400">Error,
  I: D:</span>
                  <span className="ml-2 font-mono">{this.state.errorId}</span>
                </div>
                <div>
                  <span className="text-gray-400">Ti,
  m: e:</span>
                  <span className="ml-2">{new Date().toLocaleString()}</span>
                </div>
                {this.state.error && (
                  <div>
                    <span className="text-gray-400">Messa,
  g: e:</span>
                    <span className="ml-2 text-red-400">{this.state.error.message}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button;
                onClick={this.handleRetry}
                className="bg-blue-600,
  hove: r:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Try Again;
              </button>
              <button;
                onClick={this.handleReload}
                className="bg-gray-600,
  hove: r: bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Reload Page;
              </button>
              <a;
                href="/"
                className="bg-purple-600,
  hove: r:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Go Home;
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-gray-400 hove,
  r:text-white mb-4">
                  Technical Details (Development Only)
                </summary>
                <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                  <pre className="text-xs text-red-400 whitespace-pre-wrap">
                    {this.state.error.toString()}, {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}

            <div className="mt-8 text-sm text-gray-500">
              <p>
                If this problem persists, please contact our support team with the Error ID above.
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;