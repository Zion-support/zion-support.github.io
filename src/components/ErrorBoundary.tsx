import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Info, 
  Copy, 
  CheckCircle,
  ExternalLink,
  Shield,
  Zap,
  RotateCcw
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
  recoveryOptions?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  showDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
  recoveryAttempted: boolean;
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
      recoveryAttempted: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate a unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId,
      showDetails: false,
      isReporting: false,
      reportSent: false,
      recoveryAttempted: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service (if enabled)
    if (this.props.enableReporting) {
      this.reportError(error, errorInfo);
    }

    // Log error to localStorage for debugging
    this.logErrorToStorage(error, errorInfo);
  }

  // Log error to localStorage for debugging
  private logErrorToStorage = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorLog = {
        timestamp: new Date().toISOString(),
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      const existingLogs = JSON.parse(localStorage.getItem('zion-error-logs') || '[]');
      existingLogs.unshift(errorLog);
      
      // Keep only last 10 errors
      if (existingLogs.length > 10) {
        existingLogs.splice(10);
      }
      
      localStorage.setItem('zion-error-logs', JSON.stringify(existingLogs));
    } catch (e) {
      // Silently fail if localStorage is not available
    }
  };

  // Report error to external service
  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    this.setState({ isReporting: true });

    try {
      // Example error reporting to external service
      // In production, you might use Sentry, LogRocket, or similar
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      // Send to your error reporting service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });

      this.setState({ reportSent: true });
    } catch (e) {
      console.warn('Failed to report error:', e);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  // Copy error details to clipboard
  private copyErrorDetails = async () => {
    if (!this.state.error || !this.state.errorInfo) return;

    const errorDetails = `
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
Error ID: ${this.state.errorId}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorDetails);
      // Show success feedback
      const button = document.querySelector('[data-copy-button]') as HTMLElement;
      if (button) {
        const originalText = button.innerHTML;
        button.innerHTML = '<CheckCircle className="w-4 h-4" /> Copied!';
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      }
    } catch (e) {
      console.warn('Failed to copy error details:', e);
    }
  };

  // Attempt to recover from error
  private attemptRecovery = () => {
    this.setState({ recoveryAttempted: true });
    
    // Clear error state and attempt to re-render
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      isReporting: false,
      reportSent: false,
      recoveryAttempted: false
    });

    // Force a re-render
    this.forceUpdate();
  };

  // Reset error boundary
  private resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      showDetails: false,
      isReporting: false,
      reportSent: false,
      recoveryAttempted: false
    });
  };

  // Navigate to home page
  private goHome = () => {
    window.location.href = '/';
  };

  // Refresh the page
  private refreshPage = () => {
    window.location.reload();
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
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-400/20 rounded-full">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100">We've encountered an unexpected error</p>
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
                </p>
                
                {this.state.error && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Error ID</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">{this.state.errorId}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {this.state.error.message}
                    </div>
                  </div>
                )}
              </div>

              {/* Recovery Options */}
              {this.props.recoveryOptions && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-500" />
                    Recovery Options
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={this.attemptRecovery}
                      className="flex items-center justify-center gap-2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                      disabled={this.state.recoveryAttempted}
                    >
                      <RotateCcw className="w-4 h-4" />
                      {this.state.recoveryAttempted ? 'Recovery Attempted' : 'Try to Recover'}
                    </button>
                    
                    <button
                      onClick={this.refreshPage}
                      className="flex items-center justify-center gap-2 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Refresh Page
                    </button>
                    
                    <button
                      onClick={this.goHome}
                      className="flex items-center justify-center gap-2 p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Home className="w-4 h-4" />
                      Go to Home
                    </button>
                    
                    <button
                      onClick={this.resetErrorBoundary}
                      className="flex items-center justify-center gap-2 p-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Shield className="w-4 h-4" />
                      Reset Boundary
                    </button>
                  </div>
                </div>
              )}

              {/* Error Details Toggle */}
              {this.state.error && this.state.errorInfo && (
                <div>
                  <button
                    onClick={() => this.setState(prev => ({ showDetails: !prev.showDetails }))}
                    className="w-full flex items-center justify-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-200"
                  >
                    <Bug className="w-4 h-4" />
                    {this.state.showDetails ? 'Hide' : 'Show'} Technical Details
                  </button>

                  {this.state.showDetails && (
                    <motion.div
                      className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Error Stack</h4>
                        <button
                          onClick={this.copyErrorDetails}
                          data-copy-button
                          className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <Copy className="w-3 h-3" />
                          Copy
                        </button>
                      </div>
                      
                      <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
                        <div className="whitespace-pre-wrap">{this.state.error.stack}</div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Component Stack</h5>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 text-xs font-mono text-gray-700 dark:text-gray-300 overflow-x-auto">
                          <div className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Error Reporting */}
              {this.props.enableReporting && (
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Help us improve by reporting this error
                      </span>
                    </div>
                    
                    {this.state.reportSent ? (
                      <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                        <CheckCircle className="w-4 h-4" />
                        Reported
                      </div>
                    ) : (
                      <button
                        onClick={() => this.reportError(this.state.error!, this.state.errorInfo!)}
                        disabled={this.state.isReporting}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white text-sm rounded-lg transition-colors duration-200"
                      >
                        {this.state.isReporting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Reporting...
                          </>
                        ) : (
                          <>
                            <Bug className="w-4 h-4" />
                            Report Error
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Support Information */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800 dark:text-blue-200">
                    <p className="font-medium mb-1">Need help?</p>
                    <p className="mb-2">If this problem persists, please contact our support team.</p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Contact Support
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
