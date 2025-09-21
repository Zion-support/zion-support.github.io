import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Here you could send error to logging service
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error; resetError: () => void }> = ({ error, resetError }) => (
  <div className="min-h-screen bg-zion-blue flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-4">
      <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-zion-slate-light mb-8">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      {error && (
        <details className="mb-8 text-left">
          <summary className="cursor-pointer text-zion-cyan">Error Details</summary>
          <pre className="mt-2 text-xs text-red-400 bg-black/20 p-2 rounded">
            {error.message}
          </pre>
        </details>
      )}
      <div className="space-x-4">
        <button
          onClick={resetError}
          className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-zion-blue-light hover:bg-zion-blue text-white px-6 py-3 rounded-lg transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
)