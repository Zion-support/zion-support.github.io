<<<<<<< HEAD
<<<<<<< HEAD
      .toISOString()
      })
    } catch (reportingError) {
      }
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
=======
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

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

class ErrorHandler extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('ErrorHandler caught an error:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env['NODE_ENV'] === 'production') {
      this.logErrorToService(error, errorInfo);
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);
  }

  logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // In a real application, you would send this to your error tracking service
      // like Sentry, LogRocket, or Bugsnag
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
<<<<<<< HEAD
=======
      // Send to your error reporting service here
    } catch (reportingError) {
      console.warn('Error reporting failed:', reportingError);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e

      console.error('Production error logged:', errorData);
      
      // Example: Send to error tracking service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (logError) {
      console.error('Failed to log error:', logError);
=======
      console.log('Error logged:', errorData);
      // Send to your error reporting service here

      console.log('Error data prepared for reporting:', errorData);
    } catch (reportingError) {
      console.error('Failed to prepare error data for reporting:', reportingError);
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
    }
  };

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      errorId: undefined 
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-8 text-center border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <AlertTriangle className="h-20 w-20 text-red-400" />
                <div className="absolute inset-0 h-20 w-20 text-red-400 animate-ping opacity-20">
                  <AlertTriangle className="h-20 w-20" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {this.state.errorId && (
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <p className="text-sm font-mono text-cyan-400">{this.state.errorId}</p>
              </div>
            )}

            {process.env['NODE_ENV'] === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-gray-800/50 rounded-lg p-4">
                <summary className="cursor-pointer text-sm font-medium text-gray-300 mb-3 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development)
                </summary>
                <div className="bg-gray-900/50 p-4 rounded text-xs font-mono text-gray-300 overflow-auto max-h-64">
                  <div className="mb-3">
                    <strong className="text-red-400">Error:</strong>
                    <div className="mt-1 text-red-300">{this.state.error.message}</div>
                  </div>
                  {this.state.error.stack && (
                    <div className="mb-3">
                      <strong className="text-yellow-400">Stack Trace:</strong>
                      <pre className="mt-1 text-gray-400 whitespace-pre-wrap">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-blue-400">Component Stack:</strong>
                      <pre className="mt-1 text-gray-400 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors shadow-lg"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Reload Page
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Home className="h-5 w-5 mr-2" />
                Go Home
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                If this problem persists, please contact our support team with the Error ID above.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorHandler;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
