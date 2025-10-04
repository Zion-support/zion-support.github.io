import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Error Info:', errorInfo);
    }

    // Report error to external service in production
    if (this.props.enableReporting && process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error reporting service
    // Example: Sentry, LogRocket, Bugsnag, etc.
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // For now, just log to console
    console.error('Error Report:', errorReport);

    // In production, you would send this to your error reporting service:
    // errorReportingService.captureException(error, { extra: errorReport });
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div
          className='error-boundary'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            margin: '1rem',
          }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ color: '#dc3545', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p
            style={{
              color: '#6c757d',
              marginBottom: '2rem',
              maxWidth: '500px',
            }}
          >
            We're sorry, but something unexpected happened. Our team has been
            notified and is working to fix this issue.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <button
              onClick={this.handleRetry}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Try Again
            </button>
            <button
              onClick={this.handleReload}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Reload Page
            </button>
          </div>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details
              style={{
                marginTop: '2rem',
                textAlign: 'left',
                backgroundColor: '#f8f9fa',
                padding: '1rem',
                borderRadius: '4px',
                border: '1px solid #dee2e6',
                maxWidth: '100%',
                overflow: 'auto',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
              >
                Error Details (Development Only)
              </summary>
              <div style={{ fontSize: '0.875rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Error:</strong> {this.state.error.message}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong>Stack:</strong>
                  <pre
                    style={{
                      backgroundColor: '#e9ecef',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      overflow: 'auto',
                      fontSize: '0.75rem',
                    }}
                  >
                    {this.state.error.stack}
                  </pre>
                </div>
                {this.state.errorInfo && (
                  <div>
                    <strong>Component Stack:</strong>
                    <pre
                      style={{
                        backgroundColor: '#e9ecef',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        overflow: 'auto',
                        fontSize: '0.75rem',
                      }}
                    >
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
