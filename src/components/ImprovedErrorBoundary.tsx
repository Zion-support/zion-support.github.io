'use client';
/**
 * Improved Error Boundary
 * Enhanced error handling with recovery mechanisms and user-friendly fallbacks
 */
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetKeys?: Array<string | number>;
}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorCount: number;
}
class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console for debugging
    console.error('Error caught by ImprovedErrorBoundary:', {
      message: error.message,
      stack: error.stack,
      component: errorInfo.componentStack ?? undefined,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    });
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Update state with error details
    this.setState((prevState) => ({
      errorInfo,
      errorCount: prevState.errorCount + 1
    }));
    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
    }
    // Send to external error tracking (if available)
    if (typeof window !== 'undefined' && (window as unknown as { Sentry: unknown }).Sentry) {
      (window as unknown as { Sentry: { captureException: (error: Error, context: Record<string, unknown>) => void } }).Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack
          }
        }
      });
    }
  }
  componentDidUpdate(prevProps: Props): void {
    // Reset error state if resetKeys changed
    if (this.props.resetKeys && prevProps.resetKeys) {
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
      errorInfo: null
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
    minHeight: "flex",
    alignItems: "center",
    padding: "#f5f5f5",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  content: {
    maxWidth: "100%",
    backgroundColor: "8px",
    padding: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: 'center' as const
  },
  icon: {
    fontSize: marginBottom, '20px'
  },
  title: {
    fontSize: "bold",
    color: marginBottom, '16px'
  },
  message: {
    fontSize: "#666",
    marginBottom: lineHeight, '1.6'
  },
  details: {
    textAlign: 'left' as const,
    marginBottom: "#f9f9f9",
    padding: "4px",
    border: '1px solid #e0e0e0'
  },
  summary: {
    cursor: "bold",
    marginBottom: userSelect, 'none' as const
  },
  errorDetails: {
    fontSize: '14px'
  },
  errorMessage: {
    marginBottom: color, '#d32f2f'
  },
  stack: {
    backgroundColor: "12px",
    borderRadius: "12px",
    overflowX: 'auto' as const,
    fontFamily: whiteSpace, 'pre-wrap' as const,
    wordBreak: 'break-all' as const
  },
  actions: {
    display: "12px",
    justifyContent: flexWrap, 'wrap' as const
  },
  button: {
    padding: "16px",
    fontWeight: "white",
    backgroundColor: "none",
    borderRadius: "pointer",
    transition: 'background-color 0.2s'
  },
  secondaryButton: {
    backgroundColor: '#6c757d'
  },
  errorCount: {
    marginTop: "14px",
    color: '#999'
  }
};