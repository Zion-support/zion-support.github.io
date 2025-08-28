import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  XCircle,
  Info,
  Shield,
  Zap
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
  errorId: string | null;
  retryCount: number;
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
      retryCount: 0,
      isRecovering: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service (if available)
    this.logErrorToService(error, errorInfo);

    // Send error to analytics (if available)
    this.sendErrorToAnalytics(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error reporting service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_id: this.state.errorId
        });
      }
    } catch (e) {
      console.warn('Failed to log error to service:', e);
    }
  };

  private sendErrorToAnalytics = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'error_boundary', {
          event_category: 'error',
          event_label: error.name,
          value: 1
        });
      }
    } catch (e) {
      console.warn('Failed to send error to analytics:', e);
    }
  };

  private handleRetry = async () => {
    this.setState({ isRecovering: true });
    
    try {
      // Wait a bit to simulate recovery
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset error state
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: this.state.retryCount + 1,
        isRecovering: false
      });
    } catch (e) {
      console.warn('Recovery failed:', e);
      this.setState({ isRecovering: false });
    }
  };

  private handleGoHome = () => {
    try {
      window.location.href = '/';
    } catch (e) {
      console.warn('Failed to navigate home:', e);
      // Fallback: reload the page
      window.location.reload();
    }
  };

  private handleGoBack = () => {
    try {
      window.history.back();
    } catch (e) {
      console.warn('Failed to go back:', e);
      // Fallback: reload the page
      window.location.reload();
    }
  };

  private handleReload = () => {
    try {
      window.location.reload();
    } catch (e) {
      console.warn('Failed to reload:', e);
      // Fallback: navigate to home
      window.location.href = '/';
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

  private getErrorSeverity = (error: Error): 'low' | 'medium' | 'high' => {
    // Determine error severity based on error type and message
    const criticalErrors = ['TypeError', 'ReferenceError', 'SyntaxError'];
    const warningErrors = ['RangeError', 'URIError'];
    
    if (criticalErrors.includes(error.name)) return 'high';
    if (warningErrors.includes(error.name)) return 'medium';
    return 'low';
  };

  private getRecoverySuggestions = (error: Error): string[] => {
    const suggestions: string[] = [];
    
    if (error.name === 'TypeError') {
      suggestions.push('Check data types and ensure proper validation');
      suggestions.push('Verify API responses match expected format');
    } else if (error.name === 'ReferenceError') {
      suggestions.push('Check if all variables are properly declared');
      suggestions.push('Ensure all imports are correctly configured');
    } else if (error.name === 'SyntaxError') {
      suggestions.push('Review code syntax and check for typos');
      suggestions.push('Validate JSON and configuration files');
    } else if (error.name === 'RangeError') {
      suggestions.push('Check array bounds and numeric limits');
      suggestions.push('Verify input parameters are within valid ranges');
    }
    
    // Add general suggestions
    suggestions.push('Try refreshing the page');
    suggestions.push('Clear browser cache and cookies');
    suggestions.push('Check your internet connection');
    
    return suggestions;
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo, errorId, retryCount, isRecovering } = this.state;
      const { fallback, showDetails = false, enableRecovery = true } = this.props;

      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      const errorType = error ? this.getErrorType(error) : 'Unknown Error';
      const errorSeverity = error ? this.getErrorSeverity(error) : 'low';
      const recoverySuggestions = error ? this.getRecoverySuggestions(error) : [];

      return (
        <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl w-full bg-zion-slate-dark border border-zion-slate-light/20 rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 border-b border-zion-slate-light/20">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <XCircle className="w-8 h-8 text-red-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
                  <p className="text-zion-slate-light">We encountered an unexpected error</p>
                </div>
              </div>
            </div>

            {/* Error Details */}
            <div className="p-6 space-y-6">
              {/* Error Summary */}
              <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-slate-light/20">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{errorType}</h3>
                    <p className="text-zion-slate-light text-sm mb-3">
                      {error?.message || 'An unexpected error occurred'}
                    </p>
                    
                    {/* Error ID for support */}
                    {errorId && (
                      <div className="text-xs text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded">
                        Error ID: {errorId}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Recovery Options */}
              {enableRecovery && (
                <div className="space-y-3">
                  <h4 className="text-white font-semibold flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Recovery Options</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={this.handleRetry}
                      disabled={isRecovering || retryCount >= 3}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-cyan hover:bg-zion-cyan-light disabled:opacity-50 disabled:cursor-not-allowed text-zion-slate-dark font-medium rounded-lg transition-colors"
                    >
                      {isRecovering ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <Zap className="w-4 h-4" />
                      )}
                      <span>
                        {isRecovering ? 'Recovering...' : `Retry (${retryCount}/3)`}
                      </span>
                    </button>

                    <button
                      onClick={this.handleGoBack}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white font-medium rounded-lg transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Go Back</span>
                    </button>

                    <button
                      onClick={this.handleGoHome}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white font-medium rounded-lg transition-colors"
                    >
                      <Home className="w-4 h-4" />
                      <span>Go Home</span>
                    </button>

                    <button
                      onClick={this.handleReload}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-white font-medium rounded-lg transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Reload Page</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Recovery Suggestions */}
              {recoverySuggestions.length > 0 && (
                <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-slate-light/20">
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Info className="w-4 h-4" />
                    <span>Suggestions</span>
                  </h4>
                  <ul className="space-y-2">
                    {recoverySuggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Details (for developers) */}
              {showDetails && errorInfo && (
                <div className="bg-zion-slate-light/10 rounded-lg p-4 border border-zion-slate-light/20">
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Bug className="w-4 h-4" />
                    <span>Technical Details</span>
                  </h4>
                  <details className="text-sm">
                    <summary className="cursor-pointer text-zion-slate-light hover:text-white mb-2">
                      Click to view stack trace
                    </summary>
                    <pre className="bg-zion-slate-light/20 p-3 rounded text-xs text-zion-slate-light overflow-x-auto">
                      <code>{errorInfo.componentStack}</code>
                    </pre>
                  </details>
                </div>
              )}

              {/* Support Information */}
              <div className="text-center text-sm text-zion-slate-light">
                <p>
                  If this problem persists, please contact our support team with the Error ID above.
                </p>
                <p className="mt-1">
                  We apologize for the inconvenience and are working to resolve this issue.
                </p>
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
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by useErrorHandler:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}
