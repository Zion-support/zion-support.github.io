import React, { Component, ErrorInfo, ReactNode } from 'react';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  X,
  Info,
  AlertCircle
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
  showDetails: boolean;
  recoveryAttempts: number;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
      recoveryAttempts: 0
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
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (e.g., Sentry, LogRocket)
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Log to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'exception', {
          description: error.message,
          fatal: false
        });
      }

      // Example: Log to custom error tracking service
      if (typeof window !== 'undefined' && (window as any).logError) {
        (window as any).logError({
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        });
      }
    } catch (logError) {
      console.error('Failed to log error to service:', logError);
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      recoveryAttempts: prevState.recoveryAttempts + 1
    }));
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.handleGoHome();
    }
  };

  private handleRefresh = () => {
    window.location.reload();
  };

  private toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
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
    const criticalErrors = ['NetworkError', 'TimeoutError', 'QuotaExceededError'];
    const warningErrors = ['Warning', 'DeprecationWarning'];
    
    if (criticalErrors.some(type => error.name.includes(type))) {
      return 'high';
    }
    
    if (warningErrors.some(type => error.name.includes(type))) {
      return 'low';
    }
    
    return 'medium';
  };

  private getRecoverySuggestions = (error: Error): string[] => {
    const suggestions: string[] = [];
    
    if (error.message.includes('network') || error.message.includes('fetch')) {
      suggestions.push('Check your internet connection');
      suggestions.push('Try refreshing the page');
    }
    
    if (error.message.includes('permission') || error.message.includes('access')) {
      suggestions.push('Check if you have the required permissions');
      suggestions.push('Try logging in again');
    }
    
    if (error.message.includes('storage') || error.message.includes('quota')) {
      suggestions.push('Clear your browser cache and cookies');
      suggestions.push('Try using a different browser');
    }
    
    if (suggestions.length === 0) {
      suggestions.push('Try refreshing the page');
      suggestions.push('Check if the issue persists');
      suggestions.push('Contact support if the problem continues');
    }
    
    return suggestions;
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorInfo, showDetails, recoveryAttempts } = this.state;
      const errorType = error ? this.getErrorType(error) : 'Unknown Error';
      const severity = error ? this.getErrorSeverity(error) : 'medium';
      const suggestions = error ? this.getRecoverySuggestions(error) : [];

      if (!error) {
        return this.renderGenericError();
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-full ${
                  severity === 'high' ? 'bg-red-500/20 text-red-400' :
                  severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {errorType} Occurred
                  </h1>
                  <p className="text-zion-slate/70">
                    Something went wrong while loading this page
                  </p>
                </div>
              </div>
            </div>

            {/* Error Details */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-400 mb-2">Error Details</h3>
                    <p className="text-red-300 text-sm font-mono break-words">
                      {error.message}
                    </p>
                  </div>
                </div>
              </div>

              {/* Recovery Suggestions */}
              {suggestions.length > 0 && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-400 mb-2">Try These Solutions</h3>
                      <ul className="space-y-1">
                        {suggestions.map((suggestion, index) => (
                          <li key={index} className="text-blue-300 text-sm flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Details (Collapsible) */}
              {this.props.showDetails && errorInfo && (
                <div className="border border-white/20 rounded-lg overflow-hidden">
                  <button
                    onClick={this.toggleDetails}
                    className="w-full p-4 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-white flex items-center space-x-2">
                      <Bug size={16} />
                      <span>Technical Details</span>
                    </span>
                    <span className="text-zion-slate/70">
                      {showDetails ? 'Hide' : 'Show'}
                    </span>
                  </button>
                  
                  {showDetails && (
                    <div className="p-4 bg-black/20 border-t border-white/20">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Component Stack</h4>
                          <pre className="text-xs text-zion-slate/70 bg-black/30 p-3 rounded overflow-x-auto">
                            {errorInfo.componentStack}
                          </pre>
                        </div>
                        
                        {error.stack && (
                          <div>
                            <h4 className="font-semibold text-white mb-2">Error Stack</h4>
                            <pre className="text-xs text-zion-slate/70 bg-black/30 p-3 rounded overflow-x-auto">
                              {error.stack}
                            </pre>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Recovery Attempts */}
              {recoveryAttempts > 0 && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <RefreshCw size={16} />
                    <span className="text-sm">
                      Recovery attempt {recoveryAttempts} of 3
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="p-6 border-t border-white/20 bg-white/5">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={this.handleRetry}
                  disabled={recoveryAttempts >= 3}
                  className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate/30 disabled:cursor-not-allowed text-zion-slate-dark font-semibold rounded-lg transition-colors flex items-center space-x-2"
                >
                  <RefreshCw size={16} />
                  <span>Try Again</span>
                </button>
                
                <button
                  onClick={this.handleGoBack}
                  className="px-6 py-3 bg-zion-slate/20 hover:bg-zion-slate/30 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
                >
                  <ArrowLeft size={16} />
                  <span>Go Back</span>
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="px-6 py-3 bg-zion-slate/20 hover:bg-zion-slate/30 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Home size={16} />
                  <span>Go Home</span>
                </button>
                
                <button
                  onClick={this.handleRefresh}
                  className="px-6 py-3 bg-zion-slate/20 hover:bg-zion-slate/30 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
                >
                  <RefreshCw size={16} />
                  <span>Refresh Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }

  private renderGenericError = () => (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6 text-center">
        <div className="p-4 bg-red-500/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <AlertTriangle size={32} className="text-red-400" />
        </div>
        <h1 className="text-xl font-bold text-white mb-2">Something Went Wrong</h1>
        <p className="text-zion-slate/70 mb-6">
          An unexpected error occurred. Please try refreshing the page.
        </p>
        <button
          onClick={this.handleRefresh}
          className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold rounded-lg transition-colors"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default ErrorBoundary;
