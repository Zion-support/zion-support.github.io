'use client';
/**
 * Improved Error Boundary;
 * Enhanced error handling with recovery mechanisms and user-friendly fallbacks;
 */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import monitoring from '../utils/monitoring';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) =>void
  resetKeys?: Array<string | number>;
}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number
}
class ImprovedErrorBoundary extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    }
  }
  static getDerivedStateFromError(error: Error): Partial<State>{
    return {
      hasError: true,
      error;
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to monitoring service;
    monitoring.logError({
      message: error.message,
      stack: error.stack,
      component: errorInfo.componentStack ?? undefined,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href;
    });
    // Call custom error handler if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Update state with error details;
    this.setState((prevState) => ({
      errorInfo,
      errorCount: prevState.errorCount + 1;
    }));
    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
    }
    // Send to external error tracking (if available)
    if (typeof window !== 'undefined' && (window as unknown as { Sentry: unknown }).Sentry) {
      (window as unknown as { Sentry: { captureException: (error: Error, context: Record<string, unknown>) => void } }).Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack;
          }
        }
      });
    }
  }
  componentDidUpdate(prevProps: Props): void {
    // Reset error state if resetKeys changed;
    if (this.props.resetKeys && prevProps.resetKeys) {
            if (resetKeysChanged && this.state.hasError) {
        this.resetErrorBoundary();
      }
    }
  }
  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null;
    });
  }
  handleReload = (): void => {
    window.location.reload();
  }
  handleGoHome = (): void => {
    window.location.href = '/';
  }
  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided;
      if (this.props.fallback) {
        return this.props.fallback;
      }
      // Default error UI
      return (
        <div>
          <div>
            <div style={styles.icon}>⚠️</div>
            <h1 style={styles.title}>Oops! Something went wrong</h1>
            <p style={styles.message}>
              We're sorry for the inconvenience. The application encountered an unexpected error.
            </p>
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details style={styles.details}>
                <summary style={styles.summary}>Error Details (Development Only)</summary>
                <div>
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
                  )}
                </div>
              </details>
            )}
            <div>
              <button
                onClick={this.resetErrorBoundary}
                style={styles.button}
                aria-label="Try Again"
              >Try Again</button>
              <button
                onClick={this.handleReload}
                style={{...styles.button, ...styles.secondaryButton}}
                aria-label="Reload Page"
              >Reload Page</button>
              <button
                onClick={this.handleGoHome}
                style={{...styles.button, ...styles.secondaryButton}}
                aria-label="Go to Homepage"
              >Go Home</button>
            </div>
            {this.state.errorCount > 1 && (
              <p style={styles.errorCount}>This error has occurred {this.state.errorCount} times</p>
            )}
          </div>
        </div>);
    }
    return this.props.children;
  }
}
export default ImprovedErrorBoundary