import React, { Component, ErrorInfo, ReactNode } from 'react';

import { Link } from 'react-router-dom';
 origin/cursor/analyze-improve-and-deploy-application-1247
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
// Update state with error details
    this.setState((prevState) => ({
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Send to external error tracking (if available)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
        },
      });
    }
  }

  componentDidUpdate(prevProps: Props): void {
    // Reset error state if resetKeys changed
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
      error: null,
      errorInfo: null,
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
      // Use custom fallback if provided origin/cursor/analyze-improve-and-deploy-application-1247
      if (this.props.fallback) {
        return this.props.fallback;
      }

// Default error UI
      return (
        <div className="error-boundary-container" style={styles.container}>
          <div style={styles.content}>
            <div style={styles.icon}>⚠️</div>
            <h1 style={styles.title}>Oops! Something went wrong</h1>
            <p style={styles.message}>
              We're sorry for the inconvenience. The application encountered an unexpected error.
            </p>
            
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details style={styles.details}>
                <summary style={styles.summary}>Error Details (Development Only)</summary>
                <div style={styles.errorDetails}>
                  <p style={styles.errorMessage}>
                    <strong>Error:</strong> {this.state.error.message}
                  </p>
                  {this.state.error.stack && (
                    <pre style={styles.stack}>
                      {this.state.error.stack}
                    </pre>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <pre style={styles.stack}>
                      <strong>Component Stack:</strong>
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )} origin/cursor/analyze-improve-and-deploy-application-1247
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
                This error has occurred {this.state.errorCount} times
              </p>
            )} origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

 origin/cursor/analyze-improve-and-deploy-application-1091
 origin/cursor/analyze-improve-and-deploy-application-1247
