import React, { Component, ReactNode, ErrorInfo } from "react";

interface ImprovedErrorBoundaryProps {
  className?: string;
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

class ImprovedErrorBoundary extends Component<
  ImprovedErrorBoundaryProps,
  State
> {
  constructor(props: ImprovedErrorBoundaryProps) {
    super(props);
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
    // Log error to console for debugging
    console.error("Error caught by ImprovedErrorBoundary:", {
      message: error.message,
      stack: error.stack,
      component: errorInfo.componentStack ?? undefined,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Update state with error details
    this.setState((prevState) => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));
    // Log to console in development
    if (process.env["NODE_ENV"] === "development") {
      console.error("Development error details:", { error, errorInfo });
    }
    // Send to external error tracking (if available)
    if (
      typeof window !== "undefined" &&
      (window as unknown as { Sentry: unknown }).Sentry
    ) {
      (
        window as unknown as {
          Sentry: {
            captureException: (
              error: Error,
              context: Record<string, unknown>,
            ) => void;
          };
        }
      ).Sentry.captureException(error, {
        contexts: {
          react: {
            componentStack: errorInfo.componentStack,
          },
        },
      });
    }
  }
  componentDidUpdate(prevProps: ImprovedErrorBoundaryProps): void {
    // Reset error state if resetKeys changed
    if (this.props.resetKeys && prevProps.resetKeys) {
      const resetKeysChanged = this.props.resetKeys.some(
        (key, index) => key !== prevProps.resetKeys![index],
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
    window.location.href = "/";
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }
      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-md border border-red-500/20 rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 text-red-400 mx-auto mb-4 text-6xl">
                ⚠️
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something Went Wrong
              </h1>
              <p className="text-gray-300 mb-4">
                We're sorry for the inconvenience. The application encountered
                an unexpected error.
              </p>
            </div>
            {process.env["NODE_ENV"] === "development" && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white mb-2">
                  Error Details (Development Only)
                </summary>
                <div className="mt-2 p-4 bg-slate-900/50 rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </p>
                  {this.state.error.stack && (
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">
                      {this.state.error.stack}
                    </pre>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">
                      <strong>Component Stack:</strong>
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.resetErrorBoundary}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-200"
                aria-label="Try Again"
              >
                Try Again
              </button>
              <button
                onClick={this.handleReload}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                aria-label="Reload Page"
              >
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                aria-label="Go to Homepage"
              >
                Go Home
              </button>
            </div>
            {this.state.errorCount > 1 && (
              <p className="mt-4 text-sm text-gray-400">
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

export default ImprovedErrorBoundary;
