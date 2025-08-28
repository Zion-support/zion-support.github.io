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
  MessageCircle,
  Settings,
  Shield,
  Zap
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
  logToService?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  showDetails: boolean;
  isRecovering: boolean;
  recoveryAttempts: number;
  lastErrorTime: number | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    errorId: null,
    showDetails: props.showDetails || false,
    isRecovering: false,
    recoveryAttempts: 0,
    lastErrorTime: null
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: props.showDetails || false,
      isRecovering: false,
      recoveryAttempts: 0,
      lastErrorTime: null
    };
  }

  public static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true, 
      error,
      errorId: this.generateErrorId(),
      lastErrorTime: Date.now()
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Update state with error info
    this.setState({ errorInfo });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service if enabled
    if (this.props.logToService) {
      this.logErrorToService(error, errorInfo);
    }

    // Store error in session storage for debugging
    this.storeErrorForDebugging(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    try {
      // Example: Send to error reporting service
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: this.getUserId(),
        sessionId: this.getSessionId()
      };

      // Send to your error reporting service
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });

      console.log('Error logged to service:', errorData);
    } catch (logError) {
      console.warn('Failed to log error to service:', logError);
    }
  }

  private storeErrorForDebugging(error: Error, errorInfo: ErrorInfo) {
    try {
      const debugInfo = {
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        error: {
          name: error.name,
          message: error.message,
          stack: error.stack
        },
        errorInfo: {
          componentStack: errorInfo.componentStack
        },
        url: window.location.href,
        userAgent: navigator.userAgent
      };

      sessionStorage.setItem('lastError', JSON.stringify(debugInfo));
    } catch (storeError) {
      console.warn('Failed to store error for debugging:', storeError);
    }
  }

  private getUserId(): string | null {
    // Implement user ID retrieval logic
    return localStorage.getItem('userId') || null;
  }

  private getSessionId(): string {
    // Generate or retrieve session ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  private handleRetry = async () => {
    this.setState({ isRecovering: true });
    
    try {
      // Wait a bit before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset error state
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        recoveryAttempts: this.state.recoveryAttempts + 1
      });
    } catch (retryError) {
      console.error('Recovery failed:', retryError);
      this.setState({ isRecovering: false });
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleToggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  private handleCopyError = async () => {
    if (!this.state.error || !this.state.errorInfo) return;

    const errorText = `
Error ID: ${this.state.errorId}
Time: ${new Date().toLocaleString()}
URL: ${window.location.href}

Error: ${this.state.error.message}
Stack: ${this.state.error.stack}

Component Stack: ${this.state.errorInfo.componentStack}
    `.trim();

    try {
      await navigator.clipboard.writeText(errorText);
      // Show success feedback
      this.showCopySuccess();
    } catch (copyError) {
      console.warn('Failed to copy error:', copyError);
      // Fallback: create temporary textarea
      const textarea = document.createElement('textarea');
      textarea.value = errorText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.showCopySuccess();
    }
  };

  private showCopySuccess() {
    // Show temporary success message
    const successMsg = document.createElement('div');
    successMsg.textContent = 'Error details copied to clipboard!';
    successMsg.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    document.body.appendChild(successMsg);
    setTimeout(() => document.body.removeChild(successMsg), 3000);
  }

  private handleReportError = () => {
    // Implement error reporting logic
    const errorReport = {
      errorId: this.state.errorId,
      error: this.state.error?.message,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Example: Open email client with error report
    const subject = encodeURIComponent(`Error Report - ${errorReport.errorId}`);
    const body = encodeURIComponent(JSON.stringify(errorReport, null, 2));
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  private getErrorCategory(): { category: string; icon: React.ReactNode; color: string } {
    if (!this.state.error) {
      return { category: 'Unknown Error', icon: <AlertTriangle />, color: 'text-red-500' };
    }

    const error = this.state.error;
    
    if (error.name === 'TypeError') {
      return { category: 'Type Error', icon: <Bug />, color: 'text-orange-500' };
    }
    
    if (error.name === 'ReferenceError') {
      return { category: 'Reference Error', icon: <Bug />, color: 'text-red-500' };
    }
    
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      return { category: 'Network Error', icon: <Zap />, color: 'text-yellow-500' };
    }
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      return { category: 'Permission Error', icon: <Shield />, color: 'text-purple-500' };
    }
    
    return { category: 'Runtime Error', icon: <AlertTriangle />, color: 'text-red-500' };
  }

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { category, icon, color } = this.getErrorCategory();

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="max-w-2xl w-full bg-zion-slate/95 backdrop-blur-xl border border-red-500/30 rounded-2xl shadow-2xl p-8"
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4 ${color}`}>
                {icon}
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Something went wrong
              </h1>
              <p className="text-zion-cyan text-lg">
                {category}
              </p>
              {this.state.errorId && (
                <p className="text-zion-cyan/60 text-sm mt-2">
                  Error ID: {this.state.errorId}
                </p>
              )}
            </div>

            {/* Error Message */}
            {this.state.error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-medium mb-2">
                  {this.state.error.message}
                </p>
                {this.state.showDetails && this.state.error.stack && (
                  <pre className="text-red-400 text-xs overflow-x-auto whitespace-pre-wrap">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}

            {/* Component Stack */}
            {this.state.showDetails && this.state.errorInfo && (
              <div className="bg-zion-slate/50 border border-zion-cyan/30 rounded-lg p-4 mb-6">
                <h3 className="text-zion-cyan font-medium mb-2">Component Stack:</h3>
                <pre className="text-zion-cyan/80 text-xs overflow-x-auto whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <button
                onClick={this.handleRetry}
                disabled={this.state.isRecovering}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {this.state.isRecovering ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Recovering...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    Try Again
                  </>
                )}
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 bg-zion-slate hover:bg-zion-slate/80 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>

              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 bg-zion-slate hover:bg-zion-slate/80 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>

              <button
                onClick={this.handleCopyError}
                className="flex items-center justify-center gap-2 bg-zion-slate hover:bg-zion-slate/80 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Copy Details
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={this.handleToggleDetails}
                className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 text-sm transition-colors"
              >
                <Info className="w-4 h-4" />
                {this.state.showDetails ? 'Hide Details' : 'Show Details'}
              </button>

              <button
                onClick={this.handleReportError}
                className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Report Error
              </button>
            </div>

            {/* Recovery Info */}
            {this.state.recoveryAttempts > 0 && (
              <div className="mt-6 p-4 bg-zion-cyan/10 border border-zion-cyan/30 rounded-lg">
                <p className="text-zion-cyan text-sm text-center">
                  Recovery attempts: {this.state.recoveryAttempts}
                </p>
              </div>
            )}

            {/* Help Text */}
            <div className="mt-6 text-center">
              <p className="text-zion-cyan/60 text-sm">
                If this problem persists, please contact our support team.
              </p>
              <p className="text-zion-cyan/40 text-xs mt-2">
                Error ID: {this.state.errorId} • Time: {this.state.lastErrorTime ? new Date(this.state.lastErrorTime).toLocaleString() : 'Unknown'}
              </p>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook-based error boundary for functional components
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (error) {
      // Log the error
      console.error('Error caught by useErrorHandler:', error);
      
      // You can also send it to an error reporting service
      if (process.env.NODE_ENV === 'production') {
        // Send to error reporting service
      }
    }
  }, [error]);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error boundaries
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback} onError={onError}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

// Global error handler for unhandled errors
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Unhandled error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}
