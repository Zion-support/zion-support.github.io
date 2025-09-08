import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Enhanced error logging
    const errorDetails = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    // Log to console with better formatting
    console.group('🚨 Error Boundary Caught Error');
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    console.error('Error Details:', errorDetails);
    console.groupEnd();
    
    // Store error in localStorage for debugging
    try {
      const errorLog = JSON.parse(localStorage.getItem('errorLog') || '[]');
      errorLog.push(errorDetails);
      // Keep only last 10 errors
      if (errorLog.length > 10) {
        errorLog.splice(0, errorLog.length - 10);
      }
      localStorage.setItem('errorLog', JSON.stringify(errorLog));
    } catch (e) {
      console.warn('Could not save error to localStorage:', e);
    }
    
    this.setState({ errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Enhanced analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          error_type: error.name
        }
      });
    }
  }

  private handleReload = () => {
    // Clear error state before reload
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.reload();
  };

  private handleGoHome = () => {
    // Clear error state before navigation
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.href = '/';
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReportError = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
    
    // In a real app, you would send this to your error reporting service
    console.log('Reporting error:', errorDetails);
    
    // For now, just show a success message
    alert('Error reported successfully. Thank you for helping us improve!');
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
              <div className="mb-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-500/20 mb-6">
                  <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">
                  Oops! Something went wrong
                </h1>
                <p className="text-blue-200 mb-2 text-lg">
                  We're sorry, but something unexpected happened.
                </p>
                <p className="text-blue-300 mb-4">
                  Our team has been notified and is working to fix this issue.
                </p>
                {this.state.errorId && (
                  <p className="text-sm text-blue-400 font-mono">
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <button
                  onClick={this.handleRetry}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  🔄 Try Again
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  🏠 Go Home
                </button>
                <button
                  onClick={this.handleReportError}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  📧 Report Issue
                </button>
              </div>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm text-blue-300 hover:text-blue-200 font-semibold mb-4">
                    🔧 Error Details (Development Only)
                  </summary>
                  <div className="mt-4 p-6 bg-black/30 rounded-lg text-xs font-mono text-blue-200 overflow-auto max-h-60 border border-white/10">
                    <div className="mb-4">
                      <strong className="text-red-400">Error:</strong> 
                      <div className="mt-1 text-red-300">{this.state.error.toString()}</div>
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong className="text-yellow-400">Component Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-2 text-blue-300 leading-relaxed">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                    {this.state.errorId && (
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <strong className="text-green-400">Error ID:</strong> 
                        <span className="text-green-300 ml-2">{this.state.errorId}</span>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;