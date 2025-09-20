import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

export class EnhancedErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    
    // Here you could send error to logging service
    // Example: sendErrorToLoggingService(error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
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
      <div className="mb-8">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-zion-slate-light mb-8">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
        </p>
      </div>
      
      {error && (
        <details className="mb-8 text-left bg-black/20 rounded-lg p-4">
          <summary className="cursor-pointer text-zion-cyan font-medium mb-2">
            Error Details (for developers)
          </summary>
          <div className="text-xs text-red-400 space-y-2">
            <div><strong>Message:</strong> {error.message}</div>
            <div><strong>Stack:</strong></div>
            <pre className="whitespace-pre-wrap text-xs">{error.stack}</pre>
          </div>
        </details>
      )}
      
      <div className="space-x-4">
        <button
          onClick={resetError}
          className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-zion-blue-light hover:bg-zion-blue text-white px-6 py-3 rounded-lg transition-colors font-medium"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
)

export default EnhancedErrorBoundary
