import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Copy, 
  Download,
  Send,
  Shield,
  Activity
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  isReporting: boolean;
  showStack: boolean;
  recoveryAttempts: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      isReporting: false,
      showStack: false,
      recoveryAttempts: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service (if configured)
    this.reportError(error, errorInfo);
  }

  // Report error to external service
  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (!process.env.REACT_APP_ERROR_REPORTING_URL) return;

    try {
      this.setState({ isReporting: true });
      
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        version: process.env.REACT_APP_VERSION || 'unknown'
      };

      await fetch(process.env.REACT_APP_ERROR_REPORTING_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (reportError) {
      console.warn('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  // Attempt to recover from error
  private attemptRecovery = () => {
    const { recoveryAttempts } = this.state;
    const maxAttempts = 3;

    if (recoveryAttempts < maxAttempts) {
      this.setState(prev => ({ 
        recoveryAttempts: prev.recoveryAttempts + 1,
        hasError: false,
        error: null,
        errorInfo: null
      }));
    } else {
      // Force page reload after max attempts
      window.location.reload();
    }
  };

  // Copy error details to clipboard
  private copyErrorDetails = async () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const errorDetails = `
Error ID: ${errorId}
Message: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorDetails);
      // Show success feedback
      const button = document.querySelector('[data-copy-button]') as HTMLElement;
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    } catch (copyError) {
      console.warn('Failed to copy error details:', copyError);
    }
  };

  // Download error report
  private downloadErrorReport = () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const errorReport = {
      errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(errorReport, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `error-report-${errorId}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Reset error boundary
  private resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      recoveryAttempts: 0
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorInfo, errorId, isReporting, showStack, recoveryAttempts } = this.state;
      const maxRecoveryAttempts = 3;

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-red-200 p-8"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-700">Error Details</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => this.setState(prev => ({ showStack: !prev.showStack }))}
                    className="text-xs text-blue-600 hover:text-blue-700"
                  >
                    {showStack ? 'Hide' : 'Show'} Stack
                  </button>
                  <button
                    onClick={this.copyErrorDetails}
                    data-copy-button
                    className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                  <button
                    onClick={this.downloadErrorReport}
                    className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 text-xs">
                <div><strong>Error ID:</strong> {errorId}</div>
                <div><strong>Message:</strong> {error?.message}</div>
                {error?.name && <div><strong>Type:</strong> {error.name}</div>}
                <div><strong>URL:</strong> {window.location.href}</div>
                <div><strong>Time:</strong> {new Date().toLocaleString()}</div>
              </div>

              {/* Stack Trace */}
              {showStack && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-medium text-gray-700 mb-2">Stack Trace:</h4>
                  <pre className="text-xs text-gray-600 bg-gray-100 p-3 rounded overflow-auto max-h-32">
                    {error?.stack}
                  </pre>
                  
                  {errorInfo?.componentStack && (
                    <>
                      <h4 className="text-xs font-medium text-gray-700 mb-2 mt-3">Component Stack:</h4>
                      <pre className="text-xs text-gray-600 bg-gray-100 p-3 rounded overflow-auto max-h-32">
                        {errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Recovery Options */}
            {this.props.enableRecovery && (
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Recovery Options
                </h3>
                <p className="text-xs text-blue-600 mb-3">
                  Attempts remaining: {maxRecoveryAttempts - recoveryAttempts}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={this.attemptRecovery}
                    disabled={recoveryAttempts >= maxRecoveryAttempts}
                    className="px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Retry ({maxRecoveryAttempts - recoveryAttempts} left)
                  </button>
                  <button
                    onClick={this.resetErrorBoundary}
                    className="px-3 py-2 text-xs bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center gap-1"
                  >
                    <Activity className="w-3 h-3" />
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
            </div>

            {/* Error Reporting Status */}
            {isReporting && (
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg flex items-center gap-2 text-sm text-yellow-700">
                <Send className="w-4 h-4 animate-pulse" />
                Reporting error to our team...
              </div>
            )}

            {/* Help Section */}
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500 mb-2">
                If this problem persists, please contact our support team
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                <span>Error ID: {errorId}</span>
                <span>•</span>
                <span>Time: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for functional components
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Hook for functional components to catch errors
export function useErrorHandler() {
  return React.useCallback((error: Error, errorInfo?: ErrorInfo) => {
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // You can add custom error handling logic here
    // For example, sending to an error reporting service
    
    // Re-throw the error to trigger error boundaries
    throw error;
  }, []);
}
