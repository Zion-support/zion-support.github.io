'use client';

import React, { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (_error: Error, _errorInfo: React.ErrorInfo) => void
}

interface State {
  hasError: boolean
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
      return this.props.fallback || (
        <div className="error-boundary">
          <div className="error-content">
            <AlertTriangle className="error-icon" />
            <h2>Something went wrong</h2>
            <p>We're sorry, but something unexpected happened.</p>
            <div className="error-actions">
              <button onClick={() => window.location.reload()}>
                <RefreshCw className="icon" />
                Reload Page
              </button>
              <button onClick={() => window.location.href = '/'}>
                <Home className="icon" />
                Go Home
              </button>
              <button onClick={() => window.location.href = '/contact'}>
                <Phone className="icon" />
                Contact Support
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default EnhancedErrorBoundary