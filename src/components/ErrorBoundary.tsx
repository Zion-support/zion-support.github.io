import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, XCircle, Info } from 'lucide-react';

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
  errorId: string | null;
  showDetails: boolean;
  isRecovering: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false,
      isRecovering: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Send error to error reporting service (if configured)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // You can integrate with services like Sentry, LogRocket, etc.
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId,
        });
      }
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({ isRecovering: true });
    
    // Attempt to recover by resetting the error state
    setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        showDetails: false,
        isRecovering: false,
      });
    }, 1000);
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleRefresh = () => {
    window.location.reload();
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private copyErrorDetails = () => {
    const errorDetails = `
Error ID: ${this.state.errorId}
Error: ${this.state.error?.message}
Stack: ${this.state.error?.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
    `.trim();

    navigator.clipboard.writeText(errorDetails).then(() => {
      // Show success message
      const button = document.getElementById('copy-error-btn');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = errorDetails;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-dark flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-w-2xl w-full bg-zion-slate-dark border border-zion-purple/20 rounded-xl shadow-2xl backdrop-blur-sm"
          >
            {/* Header */}
            <div className="p-6 border-b border-zion-purple/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                  <p className="text-zion-slate-light">
                    We've encountered an unexpected error. Our team has been notified.
                  </p>
                </div>
              </div>
            </div>

            {/* Error Details */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Error Message */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-400 mb-1">Error Details</h3>
                      <p className="text-red-300 text-sm">
                        {this.state.error?.message || 'An unknown error occurred'}
                      </p>
                      {this.state.errorId && (
                        <p className="text-red-300/70 text-xs mt-2 font-mono">
                          Error ID: {this.state.errorId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Technical Details Toggle */}
                {this.props.showDetails && (
                  <div className="space-y-3">
                    <button
                      onClick={this.toggleDetails}
                      className="flex items-center space-x-2 text-zion-slate-light hover:text-white transition-colors text-sm"
                    >
                      <Info className="w-4 h-4" />
                      <span>{this.state.showDetails ? 'Hide' : 'Show'} technical details</span>
                    </button>

                    {this.state.showDetails && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-white text-sm">Technical Information</h4>
                          <button
                            id="copy-error-btn"
                            onClick={this.copyErrorDetails}
                            className="text-xs bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple-300 px-2 py-1 rounded transition-colors"
                          >
                            Copy Details
                          </button>
                        </div>
                        
                        {this.state.error?.stack && (
                          <div>
                            <h5 className="text-zion-slate-light text-xs font-medium mb-1">Stack Trace</h5>
                            <pre className="text-xs text-zion-slate-light bg-black/20 p-2 rounded overflow-x-auto">
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}
                        
                        {this.state.errorInfo?.componentStack && (
                          <div>
                            <h5 className="text-zion-slate-light text-xs font-medium mb-1">Component Stack</h5>
                            <pre className="text-xs text-zion-slate-light bg-black/20 p-2 rounded overflow-x-auto">
                              {this.state.errorInfo.componentStack}
                            </pre>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Recovery Actions */}
                {this.props.enableRecovery && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-sm">What would you like to do?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        onClick={this.handleRetry}
                        disabled={this.state.isRecovering}
                        className="flex items-center justify-center space-x-2 bg-zion-cyan hover:bg-zion-cyan/80 disabled:bg-zion-cyan/50 text-white px-4 py-2 rounded-lg transition-colors disabled:cursor-not-allowed"
                      >
                        {this.state.isRecovering ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <RefreshCw className="w-4 h-4" />
                        )}
                        <span>{this.state.isRecovering ? 'Recovering...' : 'Try Again'}</span>
                      </button>
                      
                      <button
                        onClick={this.handleGoHome}
                        className="flex items-center justify-center space-x-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple-300 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Home className="w-4 h-4" />
                        <span>Go Home</span>
                      </button>
                      
                      <button
                        onClick={this.handleRefresh}
                        className="flex items-center justify-center space-x-2 bg-zion-slate-darker hover:bg-zion-slate-light/10 text-zion-slate-light px-4 py-2 rounded-lg transition-colors"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Refresh Page</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Contact Support */}
                <div className="bg-zion-slate-darker border border-zion-purple/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Bug className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm mb-1">Need Help?</h4>
                      <p className="text-zion-slate-light text-sm mb-3">
                        If this error persists, please contact our support team with the error ID above.
                      </p>
                      <div className="flex space-x-3">
                        <a
                          href="mailto:kleber@ziontechgroup.com"
                          className="text-zion-cyan hover:text-zion-cyan/80 text-sm transition-colors"
                        >
                          Email Support
                        </a>
                        <a
                          href="/contact"
                          className="text-zion-cyan hover:text-zion-cyan/80 text-sm transition-colors"
                        >
                          Contact Form
                        </a>
                      </div>
                    </div>
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

// Hook for functional components to trigger error boundary
export const useErrorHandler = () => {
  const throwError = (error: Error) => {
    throw error;
  };

  const handleAsyncError = (promise: Promise<any>) => {
    return promise.catch((error) => {
      console.error('Async error caught:', error);
      throw error;
    });
  };

  return { throwError, handleAsyncError };
};

// Higher-order component for error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Partial<Props>
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
