import React, { Component, ReactNode, ErrorInfo } from 'react',
import { AlertTriangle, RefreshCw, Home } from 'lucide-react',

interface Props {
  children: ReactNode,
  fallback?: ReactNode,
}

interface State {
  hasError: boolean,
  error?: Error,
  errorInfo?: ErrorInfo,
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props),
    this.state = { hasError: false },
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error },
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo),
    this.setState({ error, errorInfo }),
    
    // Log error to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      }),
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined }),
  },

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleReset}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-900 rounded-lg text-xs text-red-400 font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div>
                    <strong>Stack:</strong>
                    <pre className="mt-1 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div className="mt-2">
                      <strong>Component Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      ),
    }

    return this.props.children,
  }
}

export default ErrorBoundary,