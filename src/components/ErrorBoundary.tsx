import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from 'lucide-react';

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
      errorId: this.generateErrorId()
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
      errorId: this.generateErrorId()
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to error reporting service (if configured)
    this.reportError(error, errorInfo);
  }

  private static generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError(error: Error, errorInfo: ErrorInfo) {
    // In a real application, you would send this to your error reporting service
    // For example: Sentry, LogRocket, Bugsnag, etc.
    
    const errorReport = {
      errorId: this.state.errorId,
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

    // Send to console for now (replace with actual error reporting service)
    console.group('🚨 Error Report');
    console.log('Error ID:', errorReport.errorId);
    console.log('Error Details:', errorReport);
    console.groupEnd();

    // You could also send to localStorage for offline error collection
    this.storeErrorLocally(errorReport);
  }

  private storeErrorLocally(errorReport: any) {
    try {
      const storedErrors = JSON.parse(localStorage.getItem('zion-error-log') || '[]');
      storedErrors.push(errorReport);
      
      // Keep only last 10 errors
      if (storedErrors.length > 10) {
        storedErrors.splice(0, storedErrors.length - 10);
      }
      
      localStorage.setItem('zion-error-log', JSON.stringify(storedErrors));
    } catch (e) {
      console.warn('Failed to store error locally:', e);
    }
  }

  private handleRetry = async () => {
    this.setState({ isRecovering: true });
    
    try {
      // Wait a bit to simulate recovery
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: this.state.retryCount + 1,
        isRecovering: false
      });
    } catch (e) {
      this.setState({ isRecovering: false });
      console.error('Recovery failed:', e);
    }
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleReportBug = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // In a real app, this would open a bug report form or send to support
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report - ${errorDetails.errorId}&body=${encodeURIComponent(JSON.stringify(errorDetails, null, 2))}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-zion-cyan/20 shadow-2xl">
            {/* Error Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-zion-slate-light text-lg">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            {this.props.showDetails && this.state.error && (
              <div className="bg-zion-slate-dark/50 rounded-lg p-4 mb-6 border border-zion-slate-light/20">
                <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Bug className="w-4 h-4 text-zion-cyan" />
                  Error Details
                </h3>
                <div className="text-sm text-zion-slate-light space-y-2">
                  <p><strong>Message:</strong> {this.state.error.message}</p>
                  <p><strong>Error ID:</strong> <code className="bg-zion-slate-light/20 px-2 py-1 rounded">{this.state.errorId}</code></p>
                  {this.state.errorInfo && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light">
                        Component Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs bg-zion-slate-dark p-3 rounded overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={this.handleRetry}
                disabled={this.state.isRecovering}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark disabled:bg-zion-slate-light disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
              >
                {this.state.isRecovering ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Zap className="w-4 h-4" />
                )}
                {this.state.isRecovering ? 'Recovering...' : 'Try Again'}
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-zion-slate-light hover:bg-zion-slate text-white font-medium rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>

              <button
                onClick={this.handleReportBug}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-zion-slate-light hover:bg-zion-slate text-white font-medium rounded-lg transition-colors duration-200"
              >
                <Shield className="w-4 h-4" />
                Report Bug
              </button>
            </div>

            {/* Recovery Information */}
            {this.state.retryCount > 0 && (
              <div className="mt-6 text-center">
                <p className="text-zion-slate-light text-sm">
                  Recovery attempts: {this.state.retryCount}
                </p>
              </div>
            )}

            {/* Support Information */}
            <div className="mt-8 text-center">
              <p className="text-zion-slate-light text-sm">
                Need help? Contact our support team at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-zion-cyan hover:text-zion-cyan-light underline"
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
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
