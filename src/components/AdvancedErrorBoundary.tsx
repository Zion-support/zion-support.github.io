import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableReporting?: boolean;
  enableRecovery?: boolean;
}
interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}
class AdvancedErrorBoundary extends Component<Props, State> {
  private analytics: any;
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0 
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return { 
      hasError: true, 
      error, 
      errorId 
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, enableReporting = true } = this.props;
    this.setState({ errorInfo });
    // Generate error ID for tracking
    const errorId = this.state.errorId || `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    // Log error details
    const errorDetails = {
      errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      retryCount: this.state.retryCount
    };
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Error Details:', errorDetails);
      console.groupEnd();
    }
    // Report to analytics if enabled
    if (enableReporting && this.analytics) {
      this.analytics.trackError(error, 'error_boundary');
    }
    // Report to error tracking service in production
    if (process.env.NODE_ENV === 'production' && enableReporting) {
      this.reportError(errorDetails);
    }
    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }
  }
  // Report error to external service
  private reportError = (errorDetails: any) => {
    // Here you would integrate with services like Sentry, LogRocket, etc.
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorDetails)
    }).catch(err => {
      console.warn('Failed to report error:', err);
    });
  };
  // Retry mechanism
  private handleRetry = () => {
    const { retryCount } = this.state;
    const maxRetries = 3;
    if (retryCount < maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        errorId: undefined,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // After max retries, reload the page
      window.location.reload();
    }
  };
  // Reset error boundary
  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined,
      retryCount: 0
    });
  };
  // Go to home page
  private handleGoHome = () => {
    window.location.href = '/';
  };
  // Copy error details for support
  private handleCopyError = () => {
    const { error, errorInfo, errorId } = this.state;
    const errorText = `
Error ID: ${errorId}
Error: ${error?.message}
Stack: ${error?.stack}
Component Stack: ${errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();
    navigator.clipboard.writeText(errorText).then(() => {
      alert('Error details copied to clipboard');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Error details copied to clipboard');
    });
  };
  render() {
    const { hasError, error, errorInfo, errorId, retryCount } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      if (fallback) {
        return fallback;
      }
      const isDevelopment = process.env.NODE_ENV === 'development';
      const maxRetries = 3;
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-800 text-white flex items-center justify-center p-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold mb-4 text-red-300">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6 text-lg">
                We encountered an unexpected error. Don't worry, our team has been notified.
              </p>
              {errorId && (
                <p className="text-sm text-gray-400 mb-4">
                  Error ID: <code className="bg-gray-800 px-2 py-1 rounded">{errorId}</code>
                </p>
              )}
            </div>
            {/* Error Details for Development */}
            {isDevelopment && (
              <div className="bg-gray-800 rounded-lg p-6 mb-8 text-left">
                <h2 className="text-xl font-semibold mb-3 text-red-300">Error Details:</h2>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Error:</strong> {error?.message || 'Unknown error'}
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Retry Count:</strong> {retryCount}/{maxRetries}
                </p>
                {errorInfo && (
                  <details className="mt-4">
                    <summary className="cursor-pointer text-blue-300 hover:text-blue-200">
                      Stack Trace
                    </summary>
                    <pre className="mt-2 text-xs text-gray-400 overflow-auto max-h-40 bg-gray-900 p-3 rounded">
                      {errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={this.handleRetry}
                disabled={retryCount >= maxRetries}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {retryCount >= maxRetries ? 'Max Retries Reached' : `Try Again (${retryCount}/${maxRetries})`}
              </button>
              <button
                onClick={this.handleReset}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Reset
              </button>
              <button
                onClick={this.handleGoHome}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Go Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reload Page
              </button>
            </div>
            {/* Support Information */}
            <div className="mt-8 text-sm text-gray-400">
              <p className="mb-2">If this problem persists, please contact our support team.</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={this.handleCopyError}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Copy Error Details
                </button>
                <span className="hidden sm:inline">•</span>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Email Support
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return children;
  }
}
// Hook version for functional components
export const useErrorBoundary = () => {
  const analytics = useAnalytics();
  const reportError = (error: Error, context?: string) => {
    analytics.trackError(error, context);
  };
  return { reportError };
};
export default AdvancedErrorBoundary;
