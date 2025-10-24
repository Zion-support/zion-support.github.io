'use client';
import React, { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (_error: Error, _errorInfo: React.ErrorInfo) => void
}

interface State {
  hasError: boolean,
      error: Error | null
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="...">
          <div className="...">
            <div className="...">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            
            <div className="...">
              <h1 className="...">
                Something went wrong
              </h1>
              <p className="...">
                We're sorry, but something unexpected happened. Please try again.
              </p>
              
              <div className="...">
                <button
                  onClick={() => window.location.reload()}
                  className="...">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="...">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
                
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="...">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary