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
  MessageCircle,
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

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      showDetails: false,
      isReporting: false,
      reportSent: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error reporting service
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        version: process.env.REACT_APP_VERSION || '1.0.0'
      };

      // You can implement your error reporting logic here
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });

      console.log('Error logged to service:', errorData);
    } catch (reportingError) {
      console.error('Failed to log error to service:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      isReporting: false,
      reportSent: false
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleToggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private handleCopyError = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error Details:
${this.state.error.message}

Stack Trace:
${this.state.error.stack}

Component Stack:
${this.state.errorInfo.componentStack}

URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `;

      try {
        await navigator.clipboard.writeText(errorText);
        // Show success feedback
        this.showToast('Error details copied to clipboard');
      } catch (err) {
        console.error('Failed to copy error details:', err);
      }
    }
  };

  private handleDownloadError = () => {
    if (this.state.error && this.state.errorInfo) {
      const errorData = {
        error: this.state.error.message,
        stack: this.state.error.stack,
        componentStack: this.state.errorInfo.componentStack,
        url: window.location.href,
        timestamp: new Date().toISOString()
      };

      const blob = new Blob([JSON.stringify(errorData, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `error-report-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  private handleReportError = async () => {
    this.setState({ isReporting: true });

    try {
      // Simulate error reporting
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.setState({ 
        isReporting: false, 
        reportSent: true 
      });

      this.showToast('Error report sent successfully');
    } catch (err) {
      this.setState({ isReporting: false });
      this.showToast('Failed to send error report');
    }
  };

  private showToast = (message: string) => {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = 'fixed top-4 right-4 bg-zion-cyan text-black px-4 py-2 rounded-lg z-50';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  };

  private handleGithubIssue = () => {
    if (this.state.error) {
      const issueBody = `
## Error Description
${this.state.error.message}

## Steps to Reproduce
1. 
2. 
3. 

## Error Details
\`\`\`
${this.state.error.stack}
\`\`\`

## Component Stack
\`\`\`
${this.state.errorInfo?.componentStack || 'N/A'}
\`\`\`

## Environment
- URL: ${window.location.href}
- User Agent: ${navigator.userAgent}
- Version: ${process.env.REACT_APP_VERSION || '1.0.0'}
      `;

      const issueUrl = `https://github.com/ziontechgroup/zion-app/issues/new?body=${encodeURIComponent(issueBody)}&title=${encodeURIComponent(`Error: ${this.state.error.message}`)}`;
      window.open(issueUrl, '_blank');
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl w-full bg-black/80 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8 text-center"
          >
            {/* Error Icon */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6"
            >
              <AlertTriangle size={40} className="text-red-400" />
            </motion.div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="px-6 py-3 bg-zion-cyan text-black font-semibold rounded-lg hover:bg-zion-cyan/80 transition-colors flex items-center gap-2"
              >
                <RefreshCw size={20} />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="px-6 py-3 bg-zion-purple/20 text-zion-purple border border-zion-purple/30 rounded-lg hover:bg-zion-purple/30 transition-colors flex items-center gap-2"
              >
                <Home size={20} />
                Go Home
              </motion.button>
            </div>

            {/* Additional Options */}
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleToggleDetails}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700/70 transition-colors flex items-center gap-2 text-sm"
              >
                <Bug size={16} />
                {this.state.showDetails ? 'Hide' : 'Show'} Details
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleCopyError}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700/70 transition-colors flex items-center gap-2 text-sm"
              >
                <Copy size={16} />
                Copy Details
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleDownloadError}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700/70 transition-colors flex items-center gap-2 text-sm"
              >
                <Download size={16} />
                Download Report
              </motion.button>
            </div>

            {/* Error Reporting */}
            {this.props.enableReporting && (
              <div className="mb-6">
                {!this.state.reportSent ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={this.handleReportError}
                    disabled={this.state.isReporting}
                    className="px-6 py-3 bg-green-600/20 text-green-400 border border-green-600/30 rounded-lg hover:bg-green-600/30 transition-colors flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={20} />
                    {this.state.isReporting ? 'Sending...' : 'Report Error'}
                  </motion.button>
                ) : (
                  <div className="text-green-400 flex items-center gap-2 justify-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Error report sent successfully
                  </div>
                )}
              </div>
            )}

            {/* GitHub Issue Link */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleGithubIssue}
              className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-800/70 transition-colors flex items-center gap-2 text-sm mx-auto"
            >
              <Github size={16} />
              Report on GitHub
            </motion.button>

            {/* Error Details */}
            {this.state.showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 text-left bg-gray-900/50 rounded-lg p-4 overflow-auto max-h-96"
              >
                <h3 className="text-lg font-semibold text-white mb-3">Error Details</h3>
                
                {this.state.error && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Error Message:</h4>
                    <p className="text-sm text-gray-300 font-mono bg-gray-800 p-2 rounded">
                      {this.state.error.message}
                    </p>
                  </div>
                )}

                {this.state.error && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Stack Trace:</h4>
                    <pre className="text-xs text-gray-300 bg-gray-800 p-2 rounded overflow-auto">
                      {this.state.error.stack}
                    </pre>
                  </div>
                )}

                {this.state.errorInfo && (
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Component Stack:</h4>
                    <pre className="text-xs text-gray-300 bg-gray-800 p-2 rounded overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundaries
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

// Hook for manual error reporting
export const useErrorReporting = () => {
  const reportError = (error: Error, context?: Record<string, any>) => {
    try {
      const errorReport = {
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      // Send to error reporting endpoint
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      }).catch(() => {
        console.warn('Failed to report error:', error);
      });
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

  return { reportError };
};
