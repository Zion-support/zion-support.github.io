import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Info,
  AlertCircle,
  CheckCircle,
  RotateCcw,
  FileText,
  Send,
  Download,
  ExternalLink
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  showDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
  retryCount: number;
  errorHistory: Array<{
    id: string;
    error: string;
    timestamp: Date;
    componentStack: string;
  }>;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      isReporting: boolean,
      reportSent: false,
      retryCount: 0,
      errorHistory: []
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: generateErrorId()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, enableReporting = true } = this.props;
    
    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Add to error history
    this.setState(prevState => ({
      errorHistory: [
        ...prevState.errorHistory,
        {
          id: this.state.errorId,
          error: error.message,
          timestamp: new Date(),
          componentStack: errorInfo.componentStack
        }
      ]
    }));

    // Report error if enabled
    if (enableReporting) {
      this.reportError(error, errorInfo);
    }

    // Log to analytics/monitoring service
    this.logError(error, errorInfo);
  }

  // Generate unique error ID
  generateErrorId = () => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Report error to external service
  reportError = async (error: Error, errorInfo: ErrorInfo) => {
    this.setState({ isReporting: true });

    try {
      const errorReport = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        version: process.env.REACT_APP_VERSION || 'unknown'
      };

      // Send to error reporting service
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });

      this.setState({ reportSent: true });
    } catch (reportError) {
      console.error('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  // Log error to analytics
  logError = (error: Error, errorInfo: ErrorInfo) => {
    // Log to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }

    // Log to other analytics services
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Error', {
        props: {
          error: error.message,
          component: errorInfo.componentStack.split('\n')[1]?.trim() || 'unknown'
        }
      });
    }
  };

  // Retry rendering
  retry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  };

  // Reset error boundary
  reset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      reportSent: false,
      retryCount: 0
    });
  };

  // Navigate home
  goHome = () => {
    window.location.href = '/';
  };

  // Toggle error details
  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  // Download error report
  downloadErrorReport = () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const report = {
      id: errorId,
      timestamp: new Date().toISOString(),
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      componentStack: errorInfo?.componentStack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      environment: process.env.NODE_ENV
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], {
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

  // Copy error details to clipboard
  copyErrorDetails = async () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const errorText = `
Error ID: ${errorId}
Message: ${error.message}
Stack: ${error.stack}
Component Stack: ${errorInfo?.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
      // Show success feedback
      this.setState({ reportSent: true });
      setTimeout(() => this.setState({ reportSent: false }), 2000);
    } catch (err) {
      console.error('Failed to copy error details:', err);
    }
  };

  render() {
    const { 
      hasError, 
      error, 
      errorInfo, 
      errorId, 
      showDetails, 
      isReporting, 
      reportSent,
      retryCount,
      errorHistory 
    } = this.state;

    const { fallback, children } = this.props;

    if (hasError) {
      // Custom fallback UI
      if (fallback) {
        return fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-red-200 dark:border-red-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-8 h-8" />
                  <div>
                    <h1 className="text-2xl font-bold">Something went wrong</h1>
                    <p className="text-red-100">We've encountered an unexpected error</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-red-100">Error ID</div>
                  <div className="font-mono text-xs bg-red-600/50 px-2 py-1 rounded">
                    {errorId}
                  </div>
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                  <Bug className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {error?.message || 'An unexpected error occurred'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We're sorry for the inconvenience. Our team has been notified and is working to fix this issue.
                </p>
              </div>

              {/* Error Details Toggle */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button
                  onClick={this.toggleDetails}
                  className="flex items-center justify-between w-full p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Info className="w-4 h-4" />
                    <span>Error Details</span>
                  </span>
                  <span className="text-gray-500">
                    {showDetails ? 'Hide' : 'Show'}
                  </span>
                </button>

                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="space-y-3 text-xs font-mono">
                      <div>
                        <div className="text-gray-500 dark:text-gray-400 mb-1">Error Stack:</div>
                        <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded overflow-x-auto">
                          {error?.stack}
                        </div>
                      </div>
                      {errorInfo?.componentStack && (
                        <div>
                          <div className="text-gray-500 dark:text-gray-400 mb-1">Component Stack:</div>
                          <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded overflow-x-auto">
                            {errorInfo.componentStack}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Error History */}
              {errorHistory.length > 1 && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Recent Errors ({errorHistory.length})
                  </h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {errorHistory.slice(-5).map((err) => (
                      <div key={err.id} className="flex items-center justify-between text-xs p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <span className="text-gray-600 dark:text-gray-400 truncate">
                          {err.error}
                        </span>
                        <span className="text-gray-500 dark:text-gray-500">
                          {err.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={this.retry}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={retryCount > 3}
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again {retryCount > 0 && `(${retryCount}/3)`}</span>
                </button>

                <button
                  onClick={this.goHome}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>

                <button
                  onClick={this.downloadErrorReport}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </button>

                <button
                  onClick={this.copyErrorDetails}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Copy Details</span>
                </button>
              </div>

              {/* Error Reporting Status */}
              {isReporting && (
                <div className="flex items-center justify-center space-x-2 text-sm text-blue-600 dark:text-blue-400">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Reporting error...</span>
                </div>
              )}

              {reportSent && (
                <div className="flex items-center justify-center space-x-2 text-sm text-green-600 dark:text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Error reported successfully</span>
                </div>
              )}

              {/* Help Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Still having issues? We're here to help.
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="/contact"
                      className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Contact Support</span>
                    </a>
                    <a
                      href="/help"
                      className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Help Center</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return children;
  }
}

// Helper function to generate error ID
function generateErrorId(): string {
  return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
