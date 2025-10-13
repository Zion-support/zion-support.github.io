import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
=======
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
=======
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

<<<<<<< HEAD
    // Call custom error handler
    this.props.onError?.(error, errorInfo);

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error tracking service
    // like Sentry, LogRocket, or Bugsnag
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // Example: Send to error tracking service
      // errorTrackingService.captureException(error, { extra: errorData });
      
      console.error('Error logged to service:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error to service:', loggingError);
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

  private handleGoHome = () => {
    window.location.href = '/';
=======
    // Here you would typically send error to monitoring service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      // Custom fallback UI
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      // Default error UI
      return (
        <>
          <Helmet>
            <title>Error - Zion Tech Group</title>
            <meta name="robots" content="noindex, nofollow" />
          </Helmet>
          
          <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
            <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
              {/* Error Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">
                <svg 
                  className="w-8 h-8 text-red-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                </svg>
              </div>

              {/* Error Title */}
              <h1 className="text-2xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>

              {/* Error Message */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're sorry, but something unexpected happened. Our team has been notified 
                and is working to fix this issue.
              </p>

              {/* Error ID for support */}
              {this.state.errorId && (
                <div className="bg-slate-700 rounded-lg p-3 mb-6">
                  <p className="text-sm text-gray-400 mb-1">Error ID:</p>
                  <code className="text-xs text-cyan-400 font-mono break-all">
                    {this.state.errorId}
                  </code>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  Try Again
                </button>
                
                <div className="flex space-x-3">
                  <button
                    onClick={this.handleGoHome}
                    className="flex-1 border border-slate-600 text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                  >
                    Go Home
                  </button>
                  
                  <button
                    onClick={this.handleReload}
                    className="flex-1 border border-slate-600 text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                  >
                    Reload Page
                  </button>
                </div>
              </div>

              {/* Support Information */}
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-sm text-gray-400 mb-2">
                  Still having trouble? Contact our support team:
                </p>
                <div className="text-sm text-cyan-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Phone: +1-302-464-0950</p>
                </div>
              </div>

              {/* Development Error Details */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-3 bg-slate-900 rounded text-xs text-red-400 font-mono overflow-auto max-h-40">
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
                        <pre className="whitespace-pre-wrap mt-1">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        </>
=======
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-lg p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-4">
              <ExclamationTriangleIcon className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-xl font-semibold text-white mb-2">
              Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We apologize for the inconvenience. An unexpected error occurred.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-300 bg-slate-900 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                <ArrowPathIcon className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full text-gray-300 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default EnhancedErrorBoundary;
=======
export default EnhancedErrorBoundary;
>>>>>>> cursor/analyze-improve-and-deploy-application-59f5
