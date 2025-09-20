import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
};

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  };

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }
    
    this.setState({
error,
      errorInfo
    
})
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default fallback UI
      return (
        <div className="error-boundary" role="alert">
          <h2>Something went wrong</h2>
          <p>We&apos,re sorry, but something unexpected happened. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload()}
            className="btn-primary"
            type="button"
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '1rem' }}>
              <summary>Error Details (Development)</summary>
              <pre style={{ 
                background: '#f5f5f5',padding: '1rem',borderRadius: '4px',overflow: 'auto',fontSize: '12px'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      )
    }
;
    return this.props.children
  };

export default ErrorBoundary
