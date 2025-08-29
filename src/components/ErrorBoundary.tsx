import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Mail, 
  Bug, 
  X, 
  AlertCircle,
  Info,
  CheckCircle,
  RotateCcw
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showErrorDetails?: boolean;
  enableErrorReporting?: boolean;
  enableRecovery?: boolean;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isReporting: boolean;
  reportSent: boolean;
  showDetails: boolean;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isReporting: false,
      reportSent: false,
      showDetails: false,
      errorId: '',
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: this.generateErrorId(),
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Send error to monitoring service (e.g., Sentry, LogRocket)
    this.reportError(error, errorInfo);
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to analytics or monitoring service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_id: this.state.errorId
          }
        });
      }

      // Send to error reporting service
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userId: this.getUserId()
      };

      // Example: Send to your error reporting endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(() => {
        // Silently fail if error reporting fails
        console.warn('Failed to send error report');
      });
    } catch (reportingError) {
      console.warn('Error reporting failed:', reportingError);
    }
  };

  storeError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const storedErrors = JSON.parse(localStorage.getItem('zion-errors') || '[]');
      const errorData = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href
      };

      storedErrors.push(errorData);
      
      // Keep only last 10 errors
      if (storedErrors.length > 10) {
        storedErrors.splice(0, storedErrors.length - 10);
      }

      localStorage.setItem('zion-errors', JSON.stringify(storedErrors));
    } catch (storageError) {
      console.warn('Failed to store error:', storageError);
    }
  };

  getUserId = (): string | null => {
    try {
      // Get user ID from your auth system
      return localStorage.getItem('zion-user-id');
    } catch {
      return null;
    }
  };

  handleRetry = () => {
    // Report error if enabled
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (this.state.isReporting) return;

    this.setState({ isReporting: true });

    try {
      // Collect error context
      const errorContext = {
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack,
        },
        errorInfo: {
          componentStack: errorInfo.componentStack,
        },
        retryCount: this.state.retryCount,
        performance: {
          memory: (performance as any).memory,
          navigation: performance.getEntriesByType('navigation')[0],
        },
      };

      // Send error report (replace with your error reporting service)
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorContext),
      });

      if (response.ok) {
        this.setState({ reportSent: true });
      }
    } catch (reportError) {
      console.warn('Failed to report error:', reportError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {
      this.handleReset();
      return;
    }

    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
      showDetails: false,
    }));
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      showDetails: false,
      reportSent: false,
    });
  };


  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(
      `I encountered an error on your website.\n\nError ID: ${this.state.errorId}\nURL: ${window.location.href}\n\nPlease help me resolve this issue.`
    );
    window.location.href = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`;
  };

  private toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Error Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                  <p className="text-slate-300">We're sorry for the inconvenience</p>
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white font-medium mb-2">An unexpected error occurred</p>
                    <p className="text-slate-300 text-sm">
                      Our team has been notified and is working to fix this issue. 
                      You can try refreshing the page or contact support if the problem persists.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Details Toggle */}
              {this.props.showErrorDetails && (
                <div className="space-y-3">
                  <button
                    onClick={this.toggleDetails}
                    className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                  >
                    <Bug className="w-4 h-4" />
                    <span className="text-sm">
                      {this.state.showDetails ? 'Hide' : 'Show'} Error Details
                    </span>
                  </button>

                  {this.state.showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-slate-900/50 rounded-lg p-4 border border-slate-600 overflow-auto max-h-64"
                    >
                      <div className="space-y-3 text-xs">
                        <div>
                          <span className="text-slate-400">Error ID:</span>
                          <span className="text-slate-200 ml-2 font-mono">{this.state.errorId}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Error:</span>
                          <span className="text-red-400 ml-2">{this.state.error?.message}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Component:</span>
                          <span className="text-slate-200 ml-2 font-mono">
                            {this.state.errorInfo?.componentStack.split('\n')[0]}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400">URL:</span>
                          <span className="text-slate-200 ml-2">{window.location.href}</span>
                        </div>
                        <div>
                          <span className="text-slate-400">Retry Count:</span>
                          <span className="text-slate-200 ml-2">{this.state.retryCount}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={this.handleRetry}
                  disabled={this.state.retryCount >= (this.props.maxRetries || 3)}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>
                    {this.state.retryCount >= (this.props.maxRetries || 3) ? 'Max Retries' : 'Try Again'}
                  </span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-200"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>

                <button
                  onClick={this.handleContactSupport}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Support</span>
                </button>

                <button
                  onClick={this.handleReset}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Error Reporting Status */}
              {this.props.enableErrorReporting && (
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center space-x-3">
                    {this.state.isReporting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        <span className="text-slate-300 text-sm">Reporting error...</span>
                      </>
                    ) : this.state.reportSent ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-slate-300 text-sm">Error reported successfully</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-yellow-400" />
                        <span className="text-slate-300 text-sm">Error reporting enabled</span>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Recovery Suggestion */}
              {this.props.enableRecovery && this.state.retryCount > 0 && (
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-200 font-medium mb-1">Recovery Attempt</p>
                      <p className="text-blue-300 text-sm">
                        This is attempt {this.state.retryCount} of {this.props.maxRetries || 3}. 
                        If the problem persists, please contact support.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
};
