import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  X, 
  Info,
  Download,
  Mail,
  Github
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
  showDetails: boolean;
  isReporting: boolean;
  reportSent: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isReporting: boolean,
      reportSent: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        version: process.env.REACT_APP_VERSION || '1.0.0'
      };

      // Send to error reporting service (e.g., Sentry, LogRocket)
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });
      }

      // Store error in localStorage for offline reporting
      const storedErrors = JSON.parse(localStorage.getItem('zion-errors') || '[]');
      storedErrors.push(errorData);
      localStorage.setItem('zion-errors', JSON.stringify(storedErrors.slice(-10))); // Keep last 10 errors
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleToggleDetails = () => {
    this.setState(prev => ({
      showDetails: !prev.showDetails
    }));
  };

  private handleReportError = async () => {
    this.setState({ isReporting: true });

    try {
      const { error, errorInfo } = this.state;
      if (!error || !errorInfo) return;

      const reportData = {
        error: {
          message: error.message,
          stack: error.stack,
          name: error.name
        },
        errorInfo: {
          componentStack: errorInfo.componentStack
        },
        context: {
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          version: process.env.REACT_APP_VERSION || '1.0.0'
        }
      };

      // Send error report to backend
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
      });

      if (response.ok) {
        this.setState({ reportSent: true });
        setTimeout(() => {
          this.setState({ reportSent: false });
        }, 3000);
      }
    } catch (reportingError) {
      console.warn('Failed to send error report:', reportingError);
    } finally {
      this.setState({ isReporting: false });
    }
  };

  private handleDownloadErrorLog = () => {
    const { error, errorInfo } = this.state;
    if (!error || !errorInfo) return;

    const errorLog = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      errorInfo: {
        componentStack: errorInfo.componentStack
      }
    };

    const blob = new Blob([JSON.stringify(errorLog, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `error-log-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  private handleContactSupport = () => {
    const { error } = this.state;
    const subject = encodeURIComponent(`Error Report: ${error?.message || 'Unknown Error'}`);
    const body = encodeURIComponent(`
Error Details:
${error?.message || 'No error message'}

URL: ${window.location.href}
User Agent: ${navigator.userAgent}

Please provide any additional context about what you were doing when this error occurred.
    `);
    
    window.location.href = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`;
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorInfo, showDetails, isReporting, reportSent } = this.state;

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg shadow-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/20 rounded-lg">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                <p className="text-slate-400">We're sorry, but an unexpected error occurred</p>
              </div>
            </div>

            {/* Error Message */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Bug className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-red-300 font-semibold mb-2">Error Details</h3>
                  <p className="text-red-200 text-sm font-mono break-words">
                    {error?.message || 'An unknown error occurred'}
                  </p>
                  {error?.name && (
                    <p className="text-red-300 text-xs mt-1">
                      Type: {error.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-zion-cyan hover:bg-zion-cyan/80 text-black font-semibold rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={this.handleToggleDetails}
                className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                <Info className="w-4 h-4" />
                {showDetails ? 'Hide' : 'Show'} Details
              </button>
              
              <button
                onClick={this.handleDownloadErrorLog}
                className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Log
              </button>
              
              <button
                onClick={this.handleContactSupport}
                className="flex items-center gap-2 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </button>
              
              <button
                onClick={this.handleReportError}
                disabled={isReporting}
                className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                {isReporting ? (
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
            </div>

            {/* Success Message */}
            {reportSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 mb-4"
              >
                <p className="text-green-300 text-sm text-center">
                  ✓ Error report sent successfully. Thank you for helping us improve!
                </p>
              </motion.div>
            )}

            {/* Error Details */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div className="border-t border-slate-700 pt-4">
                  <h4 className="text-white font-semibold mb-3">Technical Details</h4>
                  
                  {/* Error Stack */}
                  {error?.stack && (
                    <div className="mb-4">
                      <h5 className="text-slate-300 text-sm font-semibold mb-2">Stack Trace</h5>
                      <pre className="bg-slate-900/50 border border-slate-600 rounded-lg p-3 text-xs text-slate-300 overflow-x-auto">
                        {error.stack}
                      </pre>
                    </div>
                  )}
                  
                  {/* Component Stack */}
                  {errorInfo?.componentStack && (
                    <div className="mb-4">
                      <h5 className="text-slate-300 text-sm font-semibold mb-2">Component Stack</h5>
                      <pre className="bg-slate-900/50 border border-slate-600 rounded-lg p-3 text-xs text-slate-300 overflow-x-auto">
                        {errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                  
                  {/* Environment Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">URL:</span>
                      <p className="text-slate-300 break-all">{window.location.href}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">User Agent:</span>
                      <p className="text-slate-300 text-xs">{navigator.userAgent}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Timestamp:</span>
                      <p className="text-slate-300">{new Date().toLocaleString()}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Environment:</span>
                      <p className="text-slate-300">{process.env.NODE_ENV}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Footer */}
            <div className="border-t border-slate-700 pt-4 mt-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Need help? Contact our support team</span>
                <a
                  href="https://github.com/ziontechgroup/zion-app/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Report Issue
                </a>
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
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for functional components to catch errors
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: any) => {
    console.error('Error caught by hook:', error, errorInfo);
    
    // Log to external service
    if (process.env.NODE_ENV === 'production') {
      // Send to error reporting service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false
        });
      }
    }
  };

  return { handleError };
};
