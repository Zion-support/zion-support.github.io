/**
 * Improved Error Boundary
 * Enhanced _error handling with recovery mechanisms and user-friendly fallbacks
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import monitoring from '../utils/monitoring';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (_error: Error, _errorInfo: ErrorInfo) => void;
  resetKeys?: Array<string | number>;
}

interface State {
  hasError: boolean;
  _error: Error | null;
  _errorInfo: ErrorInfo | null;
  errorCount: number;
}

class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      _error: null,
      _errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(_error: Error): Partial<State> {
    return {
      hasError: true,
      _error,
    };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    // Log _error to monitoring service
    monitoring.logError({
      message: _error.message,
      stack: _error.stack,
      component: _errorInfo.componentStack ?? undefined,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });

    // Call custom _error handler if provided
    if (this.props.onError) {
      this.props.onError(_error, _errorInfo);
    }

    // Update state with _error details
    this.setState((prevState) => ({
      _errorInfo,
      errorCount: prevState.errorCount + 1,
    }));

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      if (process.env.NODE_ENV === 'development') { console.error('Error Boundary caught an _error:', _error, _errorInfo); }
    }

    // Send to external _error tracking (if available)
    if (typeof window !== 'undefined' && (window as unknown as { Sentry?: { captureException: Function } }).Sentry) {
      ((window as unknown as { Sentry: { captureException: Function } }).Sentry).captureException(_error, {
        contexts: {
          react: {
            componentStack: _errorInfo.componentStack,
          },
        },
      });
    }
  }

  componentDidUpdate(prevProps: Props): void {
    // Reset _error state if resetKeys changed
    if (this.props.resetKeys && prevProps.resetKeys) {
      const resetKeysChanged = this.props.resetKeys.some(
        (key, index) => key !== prevProps.resetKeys![index]
      );
      
      if (resetKeysChanged && this.state.hasError) {
        this.resetErrorBoundary();
      }
    }
  }

  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      _error: null,
      _errorInfo: null,
    });
  };

  handleReload = (): void => {
    window.location.reload();
  };

  handleGoHome = (): void => {
    window.location.href = '/';
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default _error UI
      return (
        <div className="_error-boundary-container" style={styles.container}>
          <div style={styles.content}>
            <div style={styles.icon}>⚠️</div>
            <h1 style={styles.title}>Oops! Something went wrong</h1>
            <p style={styles.message}>
              We're sorry for the inconvenience. The application encountered an unexpected _error.
            </p>
            
            {process.env['NODE_ENV'] === 'development' && this.state._error && (
              <details style={styles.details}>
                <summary style={styles.summary}>Error Details (Development Only)</summary>
                <div style={styles.errorDetails}>
                  <p style={styles.errorMessage}>
                    <strong>Error:</strong> {this.state._error.message}
                  </p>
                  {this.state._error.stack && (
                    <pre style={styles.stack}>
                      {this.state._error.stack}
                    </pre>
                  )}
                  {this.state._errorInfo?.componentStack && (
                    <pre style={styles.stack}>
                      <strong>Component Stack:</strong>
                      {this.state._errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            <div style={styles.actions}>
              <button
                onClick={this.resetErrorBoundary}
                style={styles.button}
                aria-label="Try Again"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                style={{...styles.button, ...styles.secondaryButton}}
                aria-label="Reload Page"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                style={{...styles.button, ...styles.secondaryButton}}
                aria-label="Go to Homepage"
              >
                Go Home
              </button>
            </div>

            {this.state.errorCount > 1 && (
              <p style={styles.errorCount}>
                This _error has occurred {this.state.errorCount} times
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  content: {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '40px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  icon: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '16px',
  },
  message: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '32px',
    lineHeight: '1.6',
  },
  details: {
    textAlign: 'left' as const,
    marginBottom: '24px',
    backgroundColor: '#f9f9f9',
    padding: '16px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
  },
  summary: {
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '12px',
    userSelect: 'none' as const,
  },
  errorDetails: {
    fontSize: '14px',
  },
  errorMessage: {
    marginBottom: '12px',
    color: '#d32f2f',
  },
  stack: {
    backgroundColor: '#f5f5f5',
    padding: '12px',
    borderRadius: '4px',
    fontSize: '12px',
    overflowX: 'auto' as const,
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap' as const,
    wordBreak: 'break-all' as const,
  },
  actions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
  },
  errorCount: {
    marginTop: '24px',
    fontSize: '14px',
    color: '#999',
  },
};

export default ImprovedErrorBoundary;
