import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorDetails {
  error: Error;
  errorInfo: ErrorInfo;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (errorDetails: ErrorDetails) => void;
  level?: 'page' | 'component' | 'global';
}

class ErrorReportingService {
  private static instance: ErrorReportingService;
  private errors: ErrorDetails[] = [];

  static getInstance(): ErrorReportingService {
    if (!ErrorReportingService.instance) {
      ErrorReportingService.instance = new ErrorReportingService();
    }
    return ErrorReportingService.instance;
  }

  reportError(errorDetails: ErrorDetails): void {
    this.errors.push(errorDetails);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorDetails);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorDetails);
    }
  }

  private async sendToErrorService(errorDetails: ErrorDetails): Promise<void> {
    try {
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorDetails)
      });
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  getErrors(): ErrorDetails[] {
    return [...this.errors];
  }

  getErrorCount(): number {
    return this.errors.length;
  }

  getErrorsByType(errorType: string): ErrorDetails[] {
    return this.errors.filter(error => error.error.name === errorType);
  }

  clearErrors(): void {
    this.errors = [];
  }
}

export class EnhancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private errorReportingService: ErrorReportingService;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.errorReportingService = ErrorReportingService.getInstance();
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorDetails: ErrorDetails = {
      error,
      errorInfo,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      sessionId: this.getSessionId(),
      userId: this.getUserId()
    };

    this.errorReportingService.reportError(errorDetails);

    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(errorDetails);
    }
  }

  private getSessionId(): string {
    if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
      return 'server_session';
    }
    
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  private getUserId(): string | undefined {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
      return undefined;
    }
    return localStorage.getItem('userId') || undefined;
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const { error, errorInfo, errorId } = this.state;
    if (error && errorInfo) {
      const errorDetails: ErrorDetails = {
        error,
        errorInfo,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: this.getSessionId(),
        userId: this.getUserId()
      };

      this.errorReportingService.reportError(errorDetails);
      
      // Show confirmation to user
      alert('Bug report submitted successfully. Thank you for helping us improve!');
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, errorId } = this.state;
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
              
              {errorId && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Error ID: {errorId}
                </p>
              )}

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Try Again
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleReportBug}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Report Bug
                </button>
              </div>

              {isDevelopment && error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 text-xs text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded overflow-auto max-h-40">
                    <div className="font-semibold mb-2">Error:</div>
                    <div className="mb-2">{error.toString()}</div>
                    <div className="font-semibold mb-2">Stack Trace:</div>
                    <div className="whitespace-pre-wrap">{error.stack}</div>
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

// Hook for error reporting
export const useErrorReporting = () => {
  const errorReportingService = ErrorReportingService.getInstance();

  const reportError = (error: Error, context?: string) => {
    const errorDetails: ErrorDetails = {
      error,
      errorInfo: { componentStack: context || 'Unknown component' },
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      sessionId: sessionStorage.getItem('sessionId') || undefined,
      userId: localStorage.getItem('userId') || undefined
    };

    errorReportingService.reportError(errorDetails);
  };

  const getErrorStats = () => {
    const errors = errorReportingService.getErrors();
    const errorTypes = errors.reduce((acc, error) => {
      acc[error.error.name] = (acc[error.error.name] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalErrors: errors.length,
      errorTypes,
      recentErrors: errors.slice(-5)
    };
  };

  return {
    reportError,
    getErrorStats,
    getErrors: () => errorReportingService.getErrors(),
    clearErrors: () => errorReportingService.clearErrors()
  };
};

// Error Dashboard Component
export const ErrorDashboard: React.FC = () => {
  const { getErrorStats } = useErrorReporting();
  const stats = getErrorStats();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Error Monitor
      </h3>
      
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        <div>Total Errors: {stats.totalErrors}</div>
        <div>Error Types: {Object.keys(stats.errorTypes).length}</div>
      </div>

      {Object.keys(stats.errorTypes).length > 0 && (
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Error Types
          </h4>
          {Object.entries(stats.errorTypes).map(([type, count]) => (
            <div key={type} className="text-xs text-gray-500 dark:text-gray-400">
              {type}: {count}
            </div>
          ))}
        </div>
      )}

      {stats.recentErrors.length > 0 && (
        <div className="max-h-32 overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Recent Errors
          </h4>
          {stats.recentErrors.map((error, index) => (
            <div key={index} className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <div className="font-semibold">{error.error.name}</div>
              <div className="truncate">{error.error.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedErrorBoundary;