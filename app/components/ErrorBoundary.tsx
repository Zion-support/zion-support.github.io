

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { Home, Bug, Mail } from 'lucide-react';
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

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to monitoring service instead of console;
    // Call custom error handler if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Store error info for debugging;
    this.setState({ errorInfo })

    // Send error to monitoring service (if available)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId;
        }
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-800/50 rounded-xl p-8 border border-red-500/30 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 mx-auto">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong;
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            {this.state.errorId && (
              <div className="mb-4 p-3 bg-slate-700/50 rounded-lg">
                <p className="text-sm text-gray-400">Error ID: {this.state.errorId}</p>
              </div>
            )}
            
            <div className="space-y-3">
              <button;
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Refresh the page to try again"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh Page;
              </button>
              <button;
                onClick={() => window.location.href = '/'}
                className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Go back to the homepage"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home;
              </button>
              <a;
                href="mailto:kleber@ziontechgroup.com?subject=Error Report&body=Error ID: ${this.state.errorId}"
                className="w-full border-2 border-gray-500 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700/50 transition-colors flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-gray-500/50"
                aria-label="Report this error via email"
              >
                <Mail className="w-5 h-5 mr-2" />
                Report Error;
              </a>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-red-400 cursor-pointer font-medium flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development)
                </summary>
                <div className="mt-2 space-y-2">
                  <pre className="text-xs text-gray-400 bg-slate-900/50 p-3 rounded overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-400 bg-slate-900/50 p-3 rounded overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
  )
}
    }

    return this.props.children;
  }
}

export default ErrorBoundary;