<<<<<<< HEAD
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
interface Props {}
=======
'use client;

import React, { Component, ErrorInfo, ReactNode } from 'react;

import { AlertTriangle, RefreshCw, Home } from lucide-react;

interface Props {
>>>>>>> origin/main
  children: ReactNode;

  fallback?: ReactNode;

  onError?: (error: Error, errorInfo: ErrorInfo) => void;

}

interface State {}
  hasError: boolean;

  error: Error | null;

  errorInfo: ErrorInfo | null;

}

class ErrorBoundary extends Component<Props, State> {;
<<<<<<< HEAD
constructor(props: Props) {}
    super(props);
    this.state="{}"
=======

constructor(props: Props) {
    super(props);

    this.state = {
>>>>>>> origin/main
      hasError: false,
      error: null,
      errorInfo: null;
    };

  }

  static getDerivedStateFromError(error: Error): State {}
    return {}
      hasError: true,
      error,
      errorInfo: null;
    };

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}
    this.setState({}
      error,
      errorInfo;
    })
<<<<<<< HEAD

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {}
      // console.error removed for production;
}

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') {}
=======
    // Log error to console in development
    if (process.env.NODE_ENV === 'development) {
      // console.error removed for production
}

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production) {
>>>>>>> origin/main
      this.logErrorToService(error, errorInfo);

    }

    // Call custom error handler if provided;
    if (this.props.onError) {}
      this.props.onError(error, errorInfo);

    }

  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {}
    // In a real application, you would send this to an error reporting service;
    // like Sentry, LogRocket, or Bugsnag;
<<<<<<< HEAD
const errorData = {}
=======

const errorData = {;;

>>>>>>> origin/main
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href;
    };
<<<<<<< HEAD
    // Example: Send to analytics;
    if ($1) { const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'exception', {}
        description: error.message,
        fatal: false;
      })
    }
=======

    // Example: Send to analytics
    if ($1) { const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;;

      gtag('event', 'exception, {
        description: error.message,
        fatal: false
      })    }
>>>>>>> origin/main

    // console.error removed for production;
};
  handleRetry = () => {}
    this.setState({}
      hasError: false,
      error: null,
<<<<<<< HEAD
      errorInfo: null;
    })
  };
  handleGoHome = () => {}
    window.location.href="'/';"
=======
      errorInfo: null
    })  };

  handleGoHome = () => {
    window.location.href = /;

>>>>>>> origin/main
  };
  render() {}
    if (this.state.hasError) {}
      // Custom fallback UI;
      if (this.props.fallback) {}
        return this.props.fallback;

      }

      // Default error UI;
      return (
<<<<<<< HEAD
        <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"></div>"
          <div className=""max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>"
            <div className=""w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>"
              <AlertTriangle className=""w-8 h-8 text-red-400" /></AlertTriangle>"
            </div>
            <h1 className=""text-2xl font-bold text-white mb-4"></h1>"
              Oops! Something went wrong;
            </h1>
            <p className=""text-gray-300 mb-6"></p>"
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className=""mb-6 text-left"></details>"
                <summary className=""text-red-400 cursor-pointer mb-2"></summary>"
                  Error Details (Development)
                </summary>
                <div className=""bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto"></div>"
                  <div className=""mb-2"></div>"
=======

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

            {process.env.NODE_ENV === 'development && this.state.error && (

              <details className="mb-6 text-left>
                <summary className="text-red-400 cursor-pointer mb-2>
                  Error Details (Development)
                </summary>
                <div className="bg-red-900/20 p-4 rounded-lg text-sm text-red-300 font-mono overflow-auto>
                  <div className="mb-2>
>>>>>>> origin/main
                    <strong>Error:</strong> {this.state.error.message}

                  </div>
                  {this.state.error.stack && (
<<<<<<< HEAD
                    <div className=""mb-2"></div>"
                      <strong>Stack:</strong>
                      <pre className=""whitespace-pre-wrap mt-1"></pre>"
=======

                    <div className="mb-2>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
>>>>>>> origin/main
                        {this.state.error.stack}

                      </pre>
                    </div>
                  )}
<<<<<<< HEAD
                  {this.state.errorInfo && (
                    <div></div>
                      <strong>Component Stack:</strong>
                      <pre className=""whitespace-pre-wrap mt-1"></pre>"
=======

                  {this.state.errorInfo && (

                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1>
>>>>>>> origin/main
                        {this.state.errorInfo.componentStack}

                      </pre>
                    </div>
                  )}
<<<<<<< HEAD
                </div>
                </details>
              )}
            <div className=""flex flex-col sm:flex-row gap-4"></div>"
              <button onClick = "{this.handleRetry}></button>"
                className=""flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">"
                <RefreshCw className=""w-4 h-4" /></RefreshCw>"
                Try Again;
              </button>
              <button onClick = "{this.handleGoHome}></button>"
                className=""flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/20">"
                <Home className=""w-4 h-4" /></Home>"
                Go Home;
              </button>
            </div>
            <div className=""mt-6 text-sm text-gray-400"></div>"
              <p>If this problem persists, please contact our support team:</p>
              <p className=""mt-2"></p>"
                <a href=""mailto:support@ziontechgroup.com"></a>"
                  className=""text-cyan-400 hover:text-cyan-300">"
                  support@ziontechgroup.com;
=======

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
>>>>>>> origin/main
                </a>
              </p>
            </div>
          </div>
        </div>
      );

    }

    return this.props.children;

  }
<<<<<<< HEAD
    return this.props.children}
=======

>>>>>>> origin/main
}

export default ErrorBoundary;
