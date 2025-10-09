import React, { useCallback, useMemo } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  maxRetries?: number;
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}
class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    this.maxRetries = props.maxRetries || 3;
  }
  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      retryCount: 0
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      }
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Enhanced error reporting
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Enhanced error reporting logic
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.groupEnd();
    }
    // Send to error reporting service (implement as needed)
    try {
      // In a real app, you would send this to your error reporting service
      // For now, we'll just log it
       
      // Example: Send to error reporting service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });
    } catch (reportingError) {
      }
  };
  private getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or context
    return localStorage.getItem('userId') || null;
  };
  private getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };
  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  private handleReload = () => {
    window.location.reload();
  };
  private handleGoHome = () => {
    window.location.href = '/';
  };
  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        // Show success message
        const button = document.getElementById('copy-error-details');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        }
      })
      .catch(() => {
         
        });
  };
  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }
      const { retryCount, error, errorId } = this.state;
      const canRetry = retryCount < this.maxRetries;
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-4">
              {canRetry && (
                <button
                  onClick={useCallback(this.handleRetry, [])} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { useCallback(this.handleRetry, [])(e); } }}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                 aria-label="Button">
                  Try Again ({this.maxRetries - retryCount} attempts left)
                </button>
              )}
              <button
                onClick={useCallback(this.handleReload, [])} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { useCallback(this.handleReload, [])(e); } }}
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
               aria-label="Button">
                Try Again
              </button>
              <button
                onClick={useCallback(this.handleGoHome, [])} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { useCallback(this.handleGoHome, [])(e); } }}
                className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
               aria-label="Button">
                Go Home
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
                <button
                  id="copy-error-details"
                  onClick={useCallback(this.copyErrorDetails, [])} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { useCallback(this.copyErrorDetails, [])(e); } }}
                  className="mt-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
                 aria-label="Button">
                  Copy Error Details
                </button>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default EnhancedErrorBoundary;
