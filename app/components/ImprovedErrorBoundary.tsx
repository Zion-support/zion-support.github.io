<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { Link } from 'react-router-dom';
=======
/**
 * Improved Error Boundary
 * Enhanced error handling with recovery mechanisms and user-friendly fallbacks
 */

import React, { Component, ErrorInfo, ReactNode } from 'react';
import monitoring from '../utils/monitoring';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
<<<<<<< HEAD
=======
  resetKeys?: Array<string | number>;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error?: Error;
  errorInfo?: ErrorInfo;
=======
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
}

class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
=======
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to monitoring service
    monitoring.logError({
      message: error.message,
      stack: error.stack,
      component: errorInfo.componentStack ?? undefined,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
<<<<<<< HEAD
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
<<<<<<< HEAD
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
=======

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
      // Use custom fallback if provided
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
            </div>

            {/* Development Error Details */}
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-red-400 cursor-pointer hover:text-red-300">
                  Error Details (Development Only)
                </summary>
                <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <pre className="text-red-300 text-sm overflow-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
=======
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
                  )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </div>
              </details>
            )}

<<<<<<< HEAD
            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">
                Still having issues? Contact our support team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get Support
              </Link>
            </div>
=======
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
            )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ImprovedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ImprovedErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

// Hook for functional components to handle errors
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by hook:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  };
};

export default ImprovedErrorBoundary;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
