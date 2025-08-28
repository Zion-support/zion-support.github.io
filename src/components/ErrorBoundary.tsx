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
  Zap,
  CheckCircle
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
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isReporting: false,
      reportSent: false,
      errorId: this.generateErrorId()
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.sendErrorToAnalytics(error, errorInfo);
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private sendErrorToAnalytics(error: Error, errorInfo: ErrorInfo) {
    try {
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId
        });
      }

      // Send to custom error tracking service
      if (this.props.enableReporting !== false) {
        this.sendErrorReport(error, errorInfo);
      }
    } catch (e) {
      console.warn('Failed to send error to analytics:', e);
    }
  }

  private async sendErrorReport(error: Error, errorInfo: ErrorInfo) {
    try {
      this.setState({ isReporting: true });

      const report = {
        errorId: this.state.errorId,
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
        },
        session: {
          id: this.getSessionId(),
          duration: this.getSessionDuration()
        }
      };

      // Send to your error reporting endpoint
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(report)
      });

      if (response.ok) {
        this.setState({ reportSent: true });
      }
    } catch (e) {
      console.warn('Failed to send error report:', e);
    } finally {
      this.setState({ isReporting: false });
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  }

  private getSessionDuration(): number {
    const startTime = sessionStorage.getItem('session_start');
    if (startTime) {
      return Date.now() - parseInt(startTime);
    }
    return 0;
  }

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      reportSent: false,
      errorId: this.generateErrorId()
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error ID: ${this.state.errorId}
Timestamp: ${new Date().toISOString()}
URL: ${window.location.href}

Error: ${this.state.error.name}: ${this.state.error.message}
Stack: ${this.state.error.stack}

Component Stack: ${this.state.errorInfo.componentStack}
      `.trim();

      try {
        await navigator.clipboard.writeText(errorText);
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
    }
  };

  private handleDownloadError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorData = {
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        error: this.state.error,
        errorInfo: this.state.errorInfo
      };

      const blob = new Blob([JSON.stringify(errorData, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `error-${this.state.errorId}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-slate-300 text-lg">
                We've encountered an unexpected error. Don't worry, we've been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-300">Error ID</span>
                <code className="text-xs bg-slate-700 px-2 py-1 rounded text-cyan-400">
                  {this.state.errorId}
                </code>
              </div>
              
              {this.state.error && (
                <div className="text-sm text-slate-300">
                  <div className="font-medium text-red-400 mb-1">
                    {this.state.error.name}: {this.state.error.message}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-all duration-200"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </motion.button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.toggleDetails}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                <Bug className="w-4 h-4" />
                <span>{this.state.showDetails ? 'Hide' : 'Show'} Details</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleCopyError}
                data-copy-button
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Details</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleDownloadError}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </motion.button>
            </div>

            {/* Error Reporting Status */}
            {this.props.enableReporting !== false && (
              <div className="text-center">
                {this.state.isReporting ? (
                  <div className="flex items-center justify-center space-x-2 text-slate-400">
                    <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                    <span>Sending error report...</span>
                  </div>
                ) : this.state.reportSent ? (
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <Shield className="w-4 h-4" />
                    <span>Error report sent successfully</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-slate-400">
                    <Zap className="w-4 h-4" />
                    <span>Error automatically reported to our team</span>
                  </div>
                )}
              </div>
            )}

            {/* Detailed Error Information */}
            {this.state.showDetails && this.state.error && this.state.errorInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 bg-slate-800/50 rounded-lg p-4 overflow-hidden"
              >
                <h3 className="text-white font-semibold mb-3">Error Details</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-slate-400 mb-1">Error Stack:</div>
                    <pre className="bg-slate-900 p-3 rounded text-xs text-slate-300 overflow-x-auto">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  
                  <div>
                    <div className="text-slate-400 mb-1">Component Stack:</div>
                    <pre className="bg-slate-900 p-3 rounded text-xs text-slate-300 overflow-x-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm mb-2">
                Still having issues? We're here to help!
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <a 
                  href="/contact" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="/help" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Help Center
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
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  return function WithErrorBoundary(props: P) {
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
    
    // Send to error reporting service
    if (typeof window !== 'undefined') {
      // You can implement your error reporting logic here
      console.log('Error would be reported to monitoring service');
    }
  }, []);
}
