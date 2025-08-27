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
  ExternalLink,
  Shield,
  Zap
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  className?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  showDetails: boolean;
  isRecovering: boolean;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false,
      isRecovering: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: this.generateErrorId()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (in production)
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private static generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // This would typically send to a service like Sentry, LogRocket, etc.
    try {
      const errorData = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      // Example: Send to analytics service
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true
        });
      }

      // Store in localStorage for debugging
      const errors = JSON.parse(localStorage.getItem('error-log') || '[]');
      errors.push(errorData);
      localStorage.setItem('error-log', JSON.stringify(errors.slice(-10))); // Keep last 10 errors
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  }

  private handleRetry = () => {
    this.setState({ isRecovering: true });
    
    // Attempt to recover by clearing error state
    setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        isRecovering: false
      });
    }, 1000);
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error ID: ${this.state.errorId}
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `.trim();

      navigator.clipboard.writeText(errorText).then(() => {
        // Show success feedback
        const button = document.querySelector('[data-copy-button]') as HTMLButtonElement;
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.disabled = true;
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
          }, 2000);
        }
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      });
    }
  };

  private handleReportIssue = () => {
    const errorData = {
      id: this.state.errorId,
      message: this.state.error?.message,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    const issueUrl = `https://github.com/Zion-Holdings/zion.app/issues/new?title=Bug Report: ${encodeURIComponent(this.state.error?.message || 'Unknown Error')}&body=${encodeURIComponent(JSON.stringify(errorData, null, 2))}`;
    window.open(issueUrl, '_blank');
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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 ${this.props.className || ''}`}
        >
          <div className="max-w-2xl w-full">
            {/* Error Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Something went wrong</h1>
              <p className="text-gray-400 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </motion.div>

            {/* Error Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Bug className="w-5 h-5 text-red-400" />
                  <span>Error Details</span>
                </h2>
                <button
                  onClick={this.toggleDetails}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {this.state.showDetails ? 'Hide' : 'Show'} Details
                </button>
              </div>

              {this.state.showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Error ID</div>
                    <div className="font-mono text-white text-sm">{this.state.errorId}</div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-2">Error Message</div>
                    <div className="text-white">{this.state.error?.message}</div>
                  </div>

                  {this.state.error?.stack && (
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Stack Trace</div>
                      <pre className="text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}

                  {this.state.errorInfo?.componentStack && (
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-2">Component Stack</div>
                      <pre className="text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              <button
                onClick={this.handleRetry}
                disabled={this.state.isRecovering}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <RefreshCw className={`w-5 h-5 ${this.state.isRecovering ? 'animate-spin' : ''}`} />
                <span>{this.state.isRecovering ? 'Recovering...' : 'Try Again'}</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-200"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </motion.div>

            {/* Additional Actions */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <button
                onClick={this.handleCopyError}
                data-copy-button
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 hover:text-white transition-colors duration-200"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Error</span>
              </button>

              <button
                onClick={this.handleReportIssue}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 hover:text-white transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Report Issue</span>
              </button>
            </motion.div>

            {/* Help Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Need help? Contact our support team</span>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                Error ID: {this.state.errorId}
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

// HOC for functional components
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Hook for functional components
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setError(new Error(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return error;
};