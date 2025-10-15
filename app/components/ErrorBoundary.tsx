<<<<<<< HEAD
import React, { Component, ReactNode } from 'react;'
import { Link } from 'react-router-dom;'
import { ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline;'
interface Props {
    children: ReactNode;
  fallback?: ReactNode;
,
  }
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}
class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
    super(props);
    this.state = {}
      hasError: false,}
      error: null,}
      errorInfo: null}
    };
  }
  static getDerivedStateFromError(error: Error): State {
    return {}
      hasError: true,}
      error,}
      errorInfo: null}
    };
  }
  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({
=======

import React, { Component, ErrorInfo, ReactNode } from 'react',
      interface Props {},
      children: ReactNode
  fallback?: ReactNode
},
      interface State {},
      hasError: boolean,
      error: Error | null,
      errorInfo: ErrorInfo | null
    },
    {}
class ErrorBoundary extends Component<Props, State> {},
      constructor(props: Props) {},
      super(props),
      this.state = {},
      hasError: false,
      error: null,
      errorInfo: null
    }
    },
    {}
  static getDerivedStateFromError(error: Error): State {},
      return {},
      hasError: true,
      error,
      errorInfo: null
    }
    },
    {}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {},
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({},)
>>>>>>> main
      error,
      errorInfo
    });
    // Log error to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {''
      console.error('ErrorBoundary caught an error:', error, errorInfo);''
    }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {''
      // Here you would typically send the error to a service like Sentry
      console.error('ErrorBoundary caught an error:', error, errorInfo);''
    }
  }
  handleRetry = () => {
    this.setState({}
      hasError: false,}
      error: null,})
      errorInfo: null})
    });
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">""
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">""
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-500/20 rounded-full mb-6">""
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">""
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />""
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">""
              Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">""
              We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.''
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (''
              <details className="mb-6 text-left">""
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white">""
                  Show Error Details
                </summary>
                <div className="mt-2 p-4 bg-slate-900 rounded text-xs text-red-400 font-mono overflow-auto">""
                  <div className="mb-2">""
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">""
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            <div className="space-y-3">""
              <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors""
              >
                <ArrowPathIcon className="w-5 h-5" />""
                Try Again
              </button>
              <Link
                to="/""
                className="w-full border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2""
              >
                <HomeIcon className="w-5 h-5" />""
                Go Home
              </Link>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-700">""
              <p className="text-sm text-gray-400">""
                If this problem persists, please{' '}''
                <Link to="/contact" className="text-purple-400 hover:text-purple-300">""
                  contact our support team
                </Link>
=======
    if ($1) {}
  // If body
}
      };
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {};
      // Here you would typically send the error to an error reporting service
      }
    },
    {}
  handleRetry = () => {},
      this.setState({},)
      hasError: false,
      error: null,
      errorInfo: null
    })
    },
    {}
  render() {},
      if (this.state.hasError) {};
      // Custom fallback UI
      if (this.props.fallback) {},
      return this.props.fallback
      },
      return ()
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-2"></h1>
              Something went wrong
            </h1>

            <p className="text-gray-300 mb-6"></p>
              We're sorry, but something unexpected happened. Please try refreshing the page.'
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && ()}
              <div className="mb-6 p-4 bg-slate-700 rounded-lg text-left"></div>
                <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
                <pre className="text-xs text-gray-300 whitespace-pre-wrap"></pre>
                  {this.state.error.toString()};
                </pre>
                {this.state.errorInfo && ()}
                  <pre className="text-xs text-gray-400 mt-2 whitespace-pre-wrap"></pre>
                    {this.state.errorInfo.componentStack};
                  </pre>
                )};
              </div>
            )};
            <div className="flex flex-col sm:flex-row gap-3"></div>
              <button>
                onClick={() => window.location.reload()},
      className="flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>

              <>
                to="/"
                className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              ></>
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700"></div>
              <p className="text-sm text-gray-400"></p>
                If this problem continues, please{' '};
                <to="/contact" className="text-blue-400 hover:text-blue-300 underline"></>
                  contact our support team
                </>
>>>>>>> main
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && ()}
              <details className="mt-6 text-left"></details>
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white"></summary>
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-800/50 rounded text-xs text-gray-300 overflow-auto"></div>
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && ()}
                    <pre className="mt-2">{this.state.errorInfo.componentStack}</pre>
                  )};
                </div>
              </details>
            )};

          </div>
        </div>
<<<<<<< HEAD
      )
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
=======
      );

import React, { Component, ReactNode } from 'react';
;
interface Props {
  children: ReactNode,
}
;
interface State {
  hasError: boolean;
  error?: Error,
}
;
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props),
    this.state = { hasError: false };
  }
;
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
;
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {';',
    console.error('Error Boundary caught an error: ", error, errorInfo);";
  }
;
  render() {
    if (this.state.hasError) {
      return ("";
        <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
          <div className ="text-center">";
            <h1 className ="text-4xl font-bold mb-4">Something went wrong</h1>";
            <p className ="text-gray-300 mb-8">';';";
              We're sorry, but something unexpected happened.;';
            </p>;
            <button;
              onClick={() => this.setState({ hasError: false })}";
              className="bg-blue-600 hover: bg-blue-700 text-white font-semibold py-2 px-4 rounded";
            >;
              Try Again;
            </button>;
          </div>;
        </div>;
      ),

    }
;
    return this.props.children;
  }
}
;
export default ErrorBoundary;'";'";
>>>>>>> main
