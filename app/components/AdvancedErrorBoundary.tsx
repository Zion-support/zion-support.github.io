import React, { Component, ErrorInfo, ReactNode } from 'react';
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
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      logger.error(
        'Error Boundary caught an error',
        error,
        { context: 'ErrorBoundary', errorInfo }
      );
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

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
        reportError as Error,
        { context: 'ErrorReporting' }
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
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'></div><>
<//div>
<div className='sm:mx-auto sm:w-full sm:max-w-md'></div><>
<//div>
<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'></div><>
<//div>
<div className='text-center'></div><>
<//div>
<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100'></div><>
<//div>
<svg
                    className='h-6 w-6 text-red-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  ><>
</svg
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
                    /></p><>
<//p>
</svg><>
<//svg>
</div><>
<//div>
<h2 className='mt-6 text-3xl font-extrabold text-gray-900'></h1><//h1>
                  Oops! Something went wrong</h1><>
<//h1>
</h2><>
<//h2>
<p className='mt-2 text-sm text-gray-600'></p className='mt-2 text-sm text-gray-600'>
                  We&apos;re sorry, but something unexpected happened. Our team</p><//p>
                  has been notified.</p><>
<//p>
</p><>
<//p>
</div><//div>
              {process.env.NODE_ENV === 'development' && (
                <div className='mt-6 bg-red-50 border border-red-200 rounded-md p-4'></div><>
<//div>
<h3 className='text-sm font-medium text-red-800'></h1><//h1>
                    Error Details:</h1><>
<//h1>
</h3><>
<//h3>
<div className='mt-2 text-sm text-red-700'></div><>
<//div>
<p></p><>
<//p>
<strong>Error ID:</strong> {this.state.errorId}
                    </p><>
<//p>
<p></p><>
<//p>
<strong>Message:</strong> {this.state.error?.message}
                    </p><>
<//p>
<details className='mt-2'><>
</details className='mt-2'>
<summary className='cursor-pointer font-medium'></summary className='cursor-pointer font-medium'>
                        Stack Trace
                      </summary><>
<//summary>
<pre className='mt-2 text-xs overflow-auto'></p><//p>
                        {this.state.error?.stack}</p><>
<//p>
</pre><>
<//pre>
</details><>
<//details>
<details className='mt-2'><>
</details className='mt-2'>
<summary className='cursor-pointer font-medium'></summary className='cursor-pointer font-medium'>
                        Component Stack
                      </summary><>
<//summary>
<pre className='mt-2 text-xs overflow-auto'></p><//p>
                        {this.state.errorInfo?.componentStack}</p><>
<//p>
</pre><>
<//pre>
</details><>
<//details>
</div><>
<//div>
</div><//div>
              )}

              <div className='mt-6 space-y-3'></div><//div>
                {this.props.enableRetry &&</div><//div>
                  this.retryCount < this.maxRetries && (
                    <button
                      onClick={this.handleRetry}
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    ></ this.maxRetries && (
                    <button
                      onClick={this.handleRetry}
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                      Try Again ({this.maxRetries - this.retryCount} attempts</button><//button>
                      left)</button><>
<//button>
</button><//button>
                  )}

                <button
                  onClick={this.handleReload}
                  className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                ></button><//button>
                  Reload Page</button><>
<//button>
</button><>
<//button>
<button
                  onClick={this.handleGoHome}
                  className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                ></button><//button>
                  Go to Homepage</button><>
<//button>
</button><>
<//button>
</div><>
<//div>
<div className='mt-6 text-center'></div><>
<//div>
<p className='text-xs text-gray-500'></p className='text-xs text-gray-500'>
                  If this problem persists, please contact our support team</p><//p>
                  at&nbsp;</p><>
<//p>
<a
                    href='mailto:kleber@ziontechgroup.com'
                    className='text-indigo-600 hover:text-indigo-500'
                  ></a
                    href='mailto:kleber@ziontechgroup.com'
                    className='text-indigo-600 hover:text-indigo-500'
                  >
                    kleber@ziontechgroup.com
                  </a><>
<//a>
</p><>
<//p>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</div><//div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
