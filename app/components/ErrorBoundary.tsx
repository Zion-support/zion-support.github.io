<<<<<<< HEAD
'use client;

import React, { Component, ErrorInfo, ReactNode } from 'react;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

import { AlertTriangle, RefreshCw, Home } from lucide-react;

interface Props {}
  children: ReactNode;
<<<<<<< HEAD

  fallback?: ReactNode;

  onError?: (error: Error, errorInfo: ErrorInfo) => void;

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
}

interface State {}
  hasError: boolean;
<<<<<<< HEAD

  error: Error | null;

  errorInfo: ErrorInfo | null;

}

<<<<<<< HEAD
class ErrorBoundary extends Component<Props, State> {;

constructor(props: Props) {
    super(props);

    this.state = {
=======
class ErrorBoundary extends Component<Props, State> {;}
constructor(props: Props) {}
    super(props);
    this.state = {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      hasError: false,
      error: null,
      errorInfo: null
    };

  }

  static getDerivedStateFromError(error: Error): State {}
    return {}
      hasError: true,
      error,
      errorInfo: null
    };

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}
    this.setState({}
      error,
      errorInfo
    })
    // Log error to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development) {
=======
    if (process.env.NODE_ENV === 'development') {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      // console.error removed for production
}

    // Log error to external service in production
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'production) {
=======
    if (process.env.NODE_ENV === 'production') {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      this.logErrorToService(error, errorInfo);

    }

    // Call custom error handler if provided
    if (this.props.onError) {}
      this.props.onError(error, errorInfo);

    }

  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {}
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag;
<<<<<<< HEAD

const errorData = {;;

=======
const errorData = {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Example: Send to analytics
<<<<<<< HEAD
    if ($1) { const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;;

      gtag('event', 'exception, {
=======
    if ($1) { const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'exception', {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
        description: error.message,
        fatal: false
      })    }

    // console.error removed for production
};

  handleRetry = () => {}
    this.setState({}
      hasError: false,
      error: null,
      errorInfo: null
<<<<<<< HEAD
    })  };

  handleGoHome = () => {
    window.location.href = /;

=======
    })
  };
  
  handleGoHome = () => {}
    window.location.href = '/';
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  };

  render() {}
    if (this.state.hasError) {}
      // Custom fallback UI
      if (this.props.fallback) {}
        return this.props.fallback;

      }

      // Default error UI
      return (

        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6>
              <AlertTriangle className="w-8 h-8 text-red-400 />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4>
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6>
              Were sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>

<<<<<<< HEAD
            {process.env.NODE_ENV === 'development && this.state.error && (

              <details className="mb-6 text-left>
                <summary className="text-red-400 cursor-pointer mb-2>
=======
            {process.env.NODE_ENV === 'development' && this.state.error && (}
              <details className="mb-6 text-left">
                <summary className="text-red-400 cursor-pointer mb-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                  Error Details (Development)
                </summary>
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto>
                  <div className="mb-2>
                    <strong>Error:</strong> {this.state.error.message}

                  </div>
<<<<<<< HEAD
                  {this.state.error.stack && (

                    <div className="mb-2>
=======
                  {this.state.error.stack && (}
                    <div className="mb-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.error.stack}

                      </pre>
                    </div>
                  )}
<<<<<<< HEAD

                  {this.state.errorInfo && (

=======
                  {this.state.errorInfo && (}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
                        {this.state.errorInfo.componentStack}

                      </pre>
                    </div>
                  )}

                </div>
                </details>
              )}

            <div className="flex flex-col sm:flex-row gap-4>
              <button
                onClick={this.handleRetry}

                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300
              >
                <RefreshCw className="w-4 h-4 />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}

                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20
              >
                <Home className="w-4 h-4 />
                Go Home
              </button>
            </div>

            <div className="mt-6 text-sm text-gray-400>
              <p>If this problem persists, please contact our support team:</p>
              <p className="mt-2>
                <a 
                  href="mailto:support@ziontechgroup.com 
                  className="text-cyan-400 hover:text-cyan-300
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </div>
=======
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
            >
              Try again
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
          </div>
        </div>
      );

    }

    return this.props.children;

  }

}

export default ErrorBoundary;
