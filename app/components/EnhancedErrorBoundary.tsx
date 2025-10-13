 origin/cursor/analyze-improve-and-deploy-application-1061
 origin/cursor/analyze-improve-and-deploy-application-1091
 origin/cursor/analyze-improve-and-deploy-application-1247
import React, { Component, ErrorInfo, ReactNode } from 'react';

import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  showErrorDetails?: boolean;
  className?: string; origin/cursor/analyze-improve-and-deploy-application-1247
}

interface State {
  hasError: boolean;
errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  } origin/cursor/analyze-improve-and-deploy-application-0d10
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      this.logErrorToService(error, errorInfo);
    }

// Log error to external service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {

    }
  } origin/cursor/analyze-improve-and-deploy-application-15aa
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };
 origin/cursor/analyze-improve-and-deploy-application-0d10

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // Send to error reporting service
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData),
    }).catch(console.error);
  };

  private getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or context
    try {
      return localStorage.getItem('userId');
    } catch {
      return null;
    }
  };

  private getSessionId = (): string => {
    // Get or create session ID
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Open email client with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorData, null, 2)}

Please describe what you were doing when this error occurred:
[Your description here]
    `);
    
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
// Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
            <div className="text-6xl mb-4">⚠️</div> origin/cursor/analyze-improve-and-deploy-application-0d10
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
error?: Error;
 origin/cursor/analyze-improve-and-deploy-application-1247
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
this.state = { 
      hasError: false, 
      retryCount: 0 
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }; origin/cursor/analyze-improve-and-deploy-application-1247
  }

console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo }); origin/cursor/analyze-improve-and-deploy-application-1061
 origin/cursor/analyze-improve-and-deploy-application-1091
 origin/cursor/analyze-improve-and-deploy-application-1232
 origin/cursor/analyze-improve-and-deploy-application-1247
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    // Send to error reporting service
    this.sendErrorReport(errorReport);

    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          retry_count: this.state.retryCount,
        }
      });
    }
  };

  private sendErrorReport = async (errorReport: any) => {
    try {
      // In a real app, you would send this to your error reporting service
      // For now, we'll just log it
 origin/cursor/analyze-improve-and-deploy-application-1256
      // Example: Send to error reporting service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport)
      // });
    } catch (reportingError) {
      console.warn('Failed to send error report:', reportingError);
    }
  };

  private getUserId = (): string | null => {
    // Get user ID from localStorage, cookies, or context
    return localStorage.getItem('userId') || null;
  };

  private getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // Max retries reached, reload the page
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        // Show success message
        const button = document.getElementById('copy-error-details');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        }
      })
      .catch(() => {
}); origin/cursor/analyze-improve-and-deploy-application-1256
  };

  render() {
    if (this.state.hasError) {
if (this.props.fallback) {
        return this.props.fallback;
      }

      const { retryCount, error, errorInfo, errorId } = this.state;
      const canRetry = retryCount < this.maxRetries;

      return (
 origin/cursor/analyze-improve-and-deploy-application-1061
 origin/cursor/analyze-improve-and-deploy-application-1507
            </p>
We're sorry, but something unexpected happened. Our team has been notified.
            </p>
            
            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/50 p-4 rounded text-xs text-red-400 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1"> origin/cursor/analyze-improve-and-deploy-application-0d10
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
</details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
 origin/cursor/analyze-improve-and-deploy-application-0d10
 origin/cursor/analyze-improve-and-deploy-application-1061
 origin/cursor/analyze-improve-and-deploy-application-1091
 origin/cursor/analyze-improve-and-deploy-application-1247
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary; origin/cursor/analyze-improve-and-deploy-application-1061
 origin/cursor/analyze-improve-and-deploy-application-1091
 origin/cursor/analyze-improve-and-deploy-application-1247
