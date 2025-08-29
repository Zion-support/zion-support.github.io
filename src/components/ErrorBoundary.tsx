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
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
    errorId: null,
    retryCount: 0,
    isRecovering: false
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId();
    
    this.setState({
      errorInfo,
      errorId
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service
    this.logErrorToService(error, errorInfo, errorId);

    // Send error to analytics
    this.sendErrorToAnalytics(error, errorInfo, errorId);
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo, errorId: string) {
    // In a real application, you would send this to your error logging service
    // like Sentry, LogRocket, or a custom API endpoint
    const errorReport = {
      errorId,
      timestamp: new Date().toISOString(),
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      errorInfo: {
        componentStack: errorInfo.componentStack
      },
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    // Example: Send to console (replace with actual service)
    console.group('Error Report');
    console.log('Error ID:', errorId);
    console.log('Error Details:', errorReport);
    console.groupEnd();

    // Example: Send to external service
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorReport)
    // }).catch(console.error);
  }

  private sendErrorToAnalytics(error: Error, errorInfo: ErrorInfo, errorId: string) {
    // In a real application, you would send this to your analytics service
    // like Google Analytics, Mixpanel, or a custom analytics endpoint
    const analyticsData = {
      event: 'error_boundary_caught',
      errorId,
      errorName: error.name,
      errorMessage: error.message,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    };

    // Example: Send to console (replace with actual analytics)
    console.log('Analytics Event:', analyticsData);

    // Example: Send to Google Analytics
    // if (window.gtag) {
    //   window.gtag('event', 'error_boundary_caught', analyticsData);
    // }
  }

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
      isRecovering: true
    }));

    // Simulate recovery process
    setTimeout(() => {
      this.setState({ isRecovering: false });
    }, 1000);
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    window.history.back();
  };

  private handleReload = () => {
    window.location.reload();
  };

  private getErrorType(): string {
    if (!this.state.error) return 'Unknown Error';
    
    if (this.state.error.name === 'TypeError') return 'Type Error';
    if (this.state.error.name === 'ReferenceError') return 'Reference Error';
    if (this.state.error.name === 'SyntaxError') return 'Syntax Error';
    if (this.state.error.name === 'RangeError') return 'Range Error';
    if (this.state.error.name === 'URIError') return 'URI Error';
    
    return this.state.error.name || 'Runtime Error';
  }

  private getErrorSeverity(): 'low' | 'medium' | 'high' | 'critical' {
    if (!this.state.error) return 'medium';
    
    const errorName = this.state.error.name;
    const errorMessage = this.state.error.message.toLowerCase();
    
    // Critical errors
    if (errorName === 'TypeError' || errorName === 'ReferenceError') return 'critical';
    
    // High severity errors
    if (errorMessage.includes('network') || errorMessage.includes('fetch')) return 'high';
    if (errorMessage.includes('permission') || errorMessage.includes('access')) return 'high';
    
    // Medium severity errors
    if (errorName === 'SyntaxError' || errorName === 'RangeError') return 'medium';
    
    return 'low';
  }

  private getRecoverySuggestions(): string[] {
    const suggestions: string[] = [];
    
    if (this.state.retryCount < 2) {
      suggestions.push('Try refreshing the page or retrying the action');
    }
    
    if (this.state.error?.message.toLowerCase().includes('network')) {
      suggestions.push('Check your internet connection and try again');
    }
    
    if (this.state.error?.message.toLowerCase().includes('permission')) {
      suggestions.push('Ensure you have the necessary permissions to perform this action');
    }
    
    if (this.state.error?.message.toLowerCase().includes('validation')) {
      suggestions.push('Verify that all required fields are filled correctly');
    }
    
    if (suggestions.length === 0) {
      suggestions.push('Try navigating to a different page and returning');
      suggestions.push('Clear your browser cache and cookies');
    }
    
    return suggestions;
  }

  public render() {
    if (this.state.hasError) {
      const errorType = this.getErrorType();
      const errorSeverity = this.getErrorSeverity();
      const recoverySuggestions = this.getRecoverySuggestions();

      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl w-full bg-white dark:bg-zion-slate-dark rounded-2xl shadow-2xl border border-zion-slate-light/20 overflow-hidden"
          >
            {/* Header */}
            <div className={`px-8 py-6 ${
              errorSeverity === 'critical' ? 'bg-red-500' :
              errorSeverity === 'high' ? 'bg-orange-500' :
              errorSeverity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
            } text-white`}>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  errorSeverity === 'critical' ? 'bg-red-600' :
                  errorSeverity === 'high' ? 'bg-orange-600' :
                  errorSeverity === 'medium' ? 'bg-yellow-600' : 'bg-blue-600'
                }`}>
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-white/90">We've encountered an unexpected error</p>
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="px-8 py-6 space-y-6">
              {/* Error Summary */}
              <div className="bg-zion-slate-light/10 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Bug className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-zion-slate-dark dark:text-white mb-2">
                      {errorType}
                    </h2>
                    <p className="text-zion-slate-light dark:text-zion-slate-light text-sm">
                      {this.state.error?.message || 'An unexpected error occurred'}
                    </p>
                    {this.state.errorId && (
                      <p className="text-xs text-zion-slate-light/70 mt-2 font-mono">
                        Error ID: {this.state.errorId}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Recovery Options */}
              {this.props.enableRecovery && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-zion-slate-dark dark:text-white flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Recovery Options</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={this.handleRetry}
                      disabled={this.state.isRecovering}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate-light/30 text-zion-slate-dark disabled:text-zion-slate-light rounded-lg transition-colors font-medium"
                    >
                      {this.state.isRecovering ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Recovering...</span>
                        </>
                      ) : (
                        <>
                          <RefreshCw className="w-4 h-4" />
                          <span>Try Again</span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={this.handleGoHome}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-zion-slate-dark dark:text-white rounded-lg transition-colors font-medium"
                    >
                      <Home className="w-4 h-4" />
                      <span>Go Home</span>
                    </button>
                    
                    <button
                      onClick={this.handleGoBack}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-zion-slate-dark dark:text-white rounded-lg transition-colors font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Go Back</span>
                    </button>
                    
                    <button
                      onClick={this.handleReload}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-zion-slate-light/20 hover:bg-zion-slate-light/30 text-zion-slate-dark dark:text-white rounded-lg transition-colors font-medium"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Reload Page</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Recovery Suggestions */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      What you can try:
                    </h3>
                    <ul className="space-y-1">
                      {recoverySuggestions.map((suggestion, index) => (
                        <li key={index} className="text-blue-800 dark:text-blue-200 text-sm flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              {this.props.showDetails && this.state.errorInfo && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-zion-slate-dark dark:text-white flex items-center space-x-2">
                    <XCircle className="w-4 h-4" />
                    <span>Technical Details</span>
                  </h3>
                  <div className="bg-zion-slate-dark text-zion-slate-light rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <div className="space-y-2">
                      <div>
                        <span className="text-zion-cyan">Component Stack:</span>
                        <pre className="mt-1 text-zion-slate-light/80">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                      {this.state.error?.stack && (
                        <div>
                          <span className="text-zion-cyan">Error Stack:</span>
                          <pre className="mt-1 text-zion-slate-light/80">
                            {this.state.error.stack}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Support */}
              <div className="text-center pt-4 border-t border-zion-slate-light/20">
                <p className="text-zion-slate-light dark:text-zion-slate-light text-sm">
                  If this problem persists, please contact our support team
                </p>
                <p className="text-zion-slate-light/70 dark:text-zion-slate-light/70 text-xs mt-1">
                  Include the Error ID when reporting: {this.state.errorId}
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
