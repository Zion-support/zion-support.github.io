<<<<<<< HEAD
<<<<<<< HEAD
=======
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

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { logger } from '../utils/logger';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
}

interface ErrorReport {
  errorId: string | null;
  error: Error;
  errorInfo: ErrorInfo;
  message: string;
  stack: string | undefined;
  componentStack: string | null | undefined;
  timestamp: string;
  userAgent: string;
  url: string;
  userId: string | null;
  sessionId: string;
}

class AdvancedErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

<<<<<<< HEAD
    // Call custom error handler if provided
=======
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      logger.error(
        'Error Boundary caught an error',
        error,
        'ErrorBoundary',
        { component: 'ErrorBoundary', errorInfo }
      );
    }

    // Call custom error handler
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

<<<<<<< HEAD
    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

<<<<<<< HEAD

=======
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
    // Log the error data for debugging
    console.error('Error data:', errorData);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    // Example: Send to your error reporting service
    // You could send this to your backend:
    // fetch('/api/error-report', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // });
    
    // For now, just log to console
    // Error data logged
  };

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      errorId: undefined 
    });
  };

  handleReportError = () => {
    const { error, errorId } = this.state;
    const subject = `Error Report - ${errorId}`;
    const body = `Error: ${error?.message}\n\nStack: ${error?.stack}\n\nPlease describe what you were doing when this error occurred:`;
    
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
=======
    // Report error to external service
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport: ErrorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
      errorInfo,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
    };

    // Send to error reporting service
    this.sendErrorReport(errorReport);
  };

  private getUserId = (): string | null => {
    // Try to get user ID from localStorage or other sources
    try {
      return localStorage.getItem('userId') || null;
    } catch {
      return null;
    }
  };

  private getSessionId = (): string => {
    // Generate or retrieve session ID
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

  private generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  private sendErrorReport = async (errorReport: ErrorReport) => {
    try {
      // Send to your error reporting service
      await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (reportError) {
      logger.error(
        'Failed to send error report',
        reportError instanceof Error ? reportError : new Error(String(reportError)),
        'ErrorReporting',
        { component: 'ErrorReporting' }
      );
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
=======
      // Custom fallback UI
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-20 w-20 text-red-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {this.state.errorId && (
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Error ID:</strong> {this.state.errorId}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Please include this ID when contacting support
                </p>
              </div>
            )}

            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </button>

              <button
                onClick={this.handleReportError}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Report Issue
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                If this problem persists, please contact our support team at{' '}
                <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  support@ziontechgroup.com
                </a>
              </p>
=======
      // Default error UI
      return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
              <div className='text-center'>
                <div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'>
                  <svg
                    className='h-6 w-6 text-red-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
                    />
                  </svg>
                </div>
                <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                  Oops! Something went wrong
                </h2>
                <p className='mt-2 text-sm text-gray-600'>
                  We&apos;re sorry, but something unexpected happened. Our team
                  has been notified.
                </p>
              </div>

              {process.env['NODE_ENV'] === 'development' && (
                <div className='mt-6 bg-red-50 border border-red-200 rounded-md p-4'>
                  <h3 className='text-sm font-medium text-red-800'>
                    Error Details:
                  </h3>
                  <div className='mt-2 text-sm text-red-700'>
                    <p>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </p>
                    <p>
                      <strong>Message:</strong> {this.state.error?.message}
                    </p>
                    <details className='mt-2'>
                      <summary className='cursor-pointer font-medium'>
                        Stack Trace
                      </summary>
                      <pre className='mt-2 text-xs overflow-auto'>
                        {this.state.error?.stack}
                      </pre>
                    </details>
                    <details className='mt-2'>
                      <summary className='cursor-pointer font-medium'>
                        Component Stack
                      </summary>
                      <pre className='mt-2 text-xs overflow-auto'>
                        {this.state.errorInfo?.componentStack}
                      </pre>
                    </details>
                  </div>
                </div>
              )}

              <div className='mt-6 space-y-3'>
                {this.props.enableRetry &&
                  this.retryCount < this.maxRetries && (
                    <button
                      onClick={this.handleRetry}
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Try Again ({this.maxRetries - this.retryCount} attempts
                      left)
                    </button>
                  )}

                <button
                  onClick={this.handleReload}
                  className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Reload Page
                </button>

                <button
                  onClick={this.handleGoHome}
                  className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Go to Homepage
                </button>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-xs text-gray-500'>
                  If this problem persists, please contact our support team
                  at&nbsp;
                  <Link to='mailto:kleber@ziontechgroup.com'
                    className='text-indigo-600 hover:text-indigo-500'
                  >
                    kleber@ziontechgroup.com
                  </Link>
                </p>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
