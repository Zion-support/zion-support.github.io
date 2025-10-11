'use client'
import React, {Component, ReactNode} from 'react'

interface Props {children: ReactNode
  fallback?: ReactNode}

interface State {hasError: boolean
  error?: Error}

class EnhancedErrorBoundary extends Component<Props, State> {constructor(props: Props) {
    super(props)
    this.state = { hasError: false}
  }

  static getDerivedStateFromError(error: Error): State {return { hasError: true, error}
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {console.error('Error caught by boundary:', error, errorInfo)}

  render() {if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg"
            >
              Reload Page
            </button>
          </div>
</div>
)
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary