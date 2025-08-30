import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  Bug, 
  FileText, 
  X,
  ChevronDown,
  ChevronUp,
  Copy,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
  copied: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: props.showDetails || false,
      copied: false
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

    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (if available)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // You can integrate with error reporting services here
      // Example: Sentry, LogRocket, Bugsnag, etc.
      
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        // Add any other relevant information
      };

      // Send to your error reporting endpoint
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });

      console.log('Error report prepared:', errorReport);
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private copyErrorDetails = async () => {
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
      `.trim();

      try {
        await navigator.clipboard.writeText(errorText);
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
      } catch (err) {
        console.error('Failed to copy error details:', err);
      }
    }
  };

  private getErrorType = (error: Error): string => {
    if (error.name === 'TypeError') return 'Type Error';
    if (error.name === 'ReferenceError') return 'Reference Error';
    if (error.name === 'SyntaxError') return 'Syntax Error';
    if (error.name === 'RangeError') return 'Range Error';
    if (error.name === 'URIError') return 'URI Error';
    if (error.name === 'EvalError') return 'Eval Error';
    return 'Runtime Error';
  };

  private getErrorCategory = (error: Error): 'critical' | 'warning' | 'info' => {
    const criticalErrors = ['TypeError', 'ReferenceError', 'SyntaxError'];
    const warningErrors = ['RangeError', 'URIError'];
    
    if (criticalErrors.includes(error.name)) return 'critical';
    if (warningErrors.includes(error.name)) return 'warning';
    return 'info';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const error = this.state.error!;
      const errorInfo = this.state.errorInfo!;
      const errorType = this.getErrorType(error);
      const errorCategory = this.getErrorCategory(error);

      const getCategoryColor = (category: string) => {
        switch (category) {
          case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/20';
          case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
          default: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
        }
      };

      return (
        <div className="min-h-screen bg-zion-blue flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-2xl bg-zion-blue-dark border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-zion-purple/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getCategoryColor(errorCategory)}`}>
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                  <p className="text-zion-slate-light">We've encountered an unexpected error</p>
                </div>
              </div>
              
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(errorCategory)}`}>
                <Bug className="w-4 h-4 mr-2" />
                {errorType}
              </div>
            </div>

            {/* Error Message */}
            <div className="p-6">
              <div className="bg-zion-blue/20 rounded-lg p-4 mb-6">
                <h2 className="text-lg font-semibold text-white mb-2">Error Details</h2>
                <p className="text-zion-slate-light font-mono text-sm break-words">
                  {error.message}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={this.handleRetry}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Try Again</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 font-medium"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>
              </div>

              {/* Technical Details Toggle */}
              <div className="border border-zion-purple/20 rounded-lg overflow-hidden">
                <button
                  onClick={this.toggleDetails}
                  className="w-full flex items-center justify-between p-4 bg-zion-blue/10 hover:bg-zion-blue/20 transition-colors"
                >
                  <span className="text-zion-cyan font-medium">Technical Details</span>
                  {this.state.showDetails ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                
                {this.state.showDetails && (
                  <div className="p-4 bg-zion-blue/5 border-t border-zion-purple/20">
                    <div className="space-y-4">
                      {/* Stack Trace */}
                      <div>
                        <h3 className="text-sm font-medium text-zion-cyan mb-2">Stack Trace</h3>
                        <div className="bg-zion-blue/20 rounded p-3">
                          <pre className="text-xs text-zion-slate-light overflow-x-auto whitespace-pre-wrap">
                            {error.stack}
                          </pre>
                        </div>
                      </div>

                      {/* Component Stack */}
                      {errorInfo.componentStack && (
                        <div>
                          <h3 className="text-sm font-medium text-zion-cyan mb-2">Component Stack</h3>
                          <div className="bg-zion-blue/20 rounded p-3">
                            <pre className="text-xs text-zion-slate-light overflow-x-auto whitespace-pre-wrap">
                              {errorInfo.componentStack}
                            </pre>
                          </div>
                        </div>
                      )}

                      {/* Copy Button */}
                      <button
                        onClick={this.copyErrorDetails}
                        className="flex items-center space-x-2 px-3 py-2 bg-zion-blue/20 text-zion-slate-light hover:text-zion-cyan rounded-lg transition-colors text-sm"
                      >
                        {this.state.copied ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy Error Details</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-zion-blue-darker border-t border-zion-purple/20">
              <div className="text-center text-sm text-zion-slate-light">
                <p>If this problem persists, please contact our support team</p>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <a
                    href="/contact"
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center space-x-1"
                  >
                    <span>Contact Support</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="/help"
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center space-x-1"
                  >
                    <span>Help Center</span>
                    <FileText className="w-3 h-3" />
                  </a>
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

// Hook for functional components to trigger error boundary
export const useErrorBoundary = () => {
  const throwError = (error: Error) => {
    throw error;
  };

  return { throwError };
};
