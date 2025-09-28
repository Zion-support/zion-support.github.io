import React, { Component, ErrorInfo, ReactNode } from 'react';

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
  errorId: string | null;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      errorInfo,
      error
    });

    // Report error to external service
    this.reportError(error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Log error to analytics
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag) {
      (window as Window & { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorId: this.state.errorId,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // Send to error reporting service (e.g., Sentry, LogRocket, etc.)
    if ('gtag' in window) {
      (window as Window & { gtag?: (command: string, eventName: string, params: Record<string, unknown>) => void }).gtag?.('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }

    // Store in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorReports') || '[]');
      existingErrors.push(errorReport);
      // Keep only last 10 errors
      const recentErrors = existingErrors.slice(-10);
      localStorage.setItem('errorReports', JSON.stringify(recentErrors));
    } catch (e) {
      console.warn('Failed to store error report:', e);
    }
  };

  private getUserId = (): string => {
    // Get user ID from your auth system
    return localStorage.getItem('userId') || 'anonymous';
  };

  private getSessionId = (): string => {
    // Generate or get session ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private copyErrorDetails = () => {
    const errorDetails = {
      error: this.state.error?.toString(),
      errorInfo: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        alert('Error details copied to clipboard');
      })
      .catch(() => {
        console.log('Error details:', errorDetails);
        alert('Error details logged to console');
      });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                🔄 Refresh Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                🔁 Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  🔍 Error Details (Development Mode)
                </summary>
                <div className="mt-2 p-4 bg-gray-100 rounded-lg">
                  <pre className="text-xs text-gray-600 overflow-auto whitespace-pre-wrap">
                    <strong>Error:</strong> {this.state.error.message}
                    {'\n\n'}
                    <strong>Stack:</strong>
                    {this.state.error.stack}
                    {'\n\n'}
                    <strong>Component Stack:</strong>
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;