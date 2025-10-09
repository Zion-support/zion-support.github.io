'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);}
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Add error logging service here (e.g., Sentry, LogRocket)
}
    }
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button}
              onClick={() = aria-label=" window.location.reload()}
              className="cyber-button px-6 py-3"
             tabIndex="0">
              Refresh Page
            "> window.location.reload()}
              className="cyber-button px-6 py-3"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
export default ErrorBoundary