<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react',"
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react",
>>>>>>> main
      interface Props {},
      children: ReactNode
  fallback?: ReactNode
},
      interface State {},
      hasError: boolean,
      error: Error | null,
      errorInfo: ErrorInfo | null
    },
    {};
class ErrorBoundary extends Component<Props, State> {},
      constructor(props: Props) {},
      super(props),
      this.state = {},
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';";
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
import { Component, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
>>>>>>> main
      error,
<<<<<<< HEAD
      errorInfo
    })
=======
      errorInfo;
    });

>>>>>>> main
    // Log error to console in development
<<<<<<< HEAD
<<<<<<< HEAD
    if ($1) {};
  // If body
<<<<<<< HEAD
}
      }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {};"
=======
};";
      };";";
    // Log error to external service in production";";";
    if (process.env.NODE_ENV === 'production") {};
>>>>>>> main
      // Here you would typically send the error to an error reporting service
      };
    },
    {};
  handleRetry = () => {},
      this.setState({},)
      hasError: false,
      error: null,
      errorInfo: null
    })
    },
    {};
  render() {},
      if (this.state.hasError) {}
      // Custom fallback UI
      if (this.props.fallback) {},
<<<<<<< HEAD
      return this.props.fallback
      },
      return ()
        <div  className ="min-h-screen flex items-center justify-center bg-slate-900 text-white">"
        <div  className ="min-h-screen flex items-center justify-center bg-slate-900 text-white">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <div  className ="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full"></div>"
              <AlertTriangle: className ="w-8 h-8 text-red-400" />"
            </div>

            <h1  className ="text-2xl font-bold text-white mb-2"></h1>"
              Something went wrong
            </h1>

            <p  className ="text-gray-300 mb-6"></p>"
              We're sorry, but something unexpected happened. Please try refreshing the page.'"
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <div  className ="mb-6 p-4 bg-slate-700 rounded-lg text-left"></div>"
                <h3  className ="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>"
                <pre: className ="text-xs text-gray-300 whitespace-pre-wrap"></pre>"
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && ()}
                  <pre: className ="text-xs text-gray-400 mt-2 whitespace-pre-wrap"></pre>"
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
            <div  className ="flex flex-col sm:flex-row gap-3"></div>"
              <button>
                onClick={() => window.location.reload()},
      className="flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors""
              >
                <RefreshCw: className ="w-4 h-4 mr-2" />"
                Refresh Page
              </button>

              <>
                to="/""
                className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors""
              ></>
                <Home: className ="w-4 h-4 mr-2" />"
                Go Home
              </>
            </div>

            <div  className ="mt-6 pt-4 border-t border-slate-700"></div>"
              <p  className ="text-sm text-gray-400"></p>"
                If this problem continues, please{' '};"
                <to="/contact" className="text-blue-400 hover:text-blue-300 underline"></>"
                  contact our support team
                </>
              </p>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <details: className ="mt-6 text-left"></details>"
                <summary: className ="text-sm text-gray-400 cursor-pointer hover:text-white"></summary>"
                  Error Details (Development)
                </summary>
                <div  className ="mt-2 p-4 bg-slate-800/50 rounded text-xs text-gray-300 overflow-auto"></div>"
                  <pre>{this.state.error.toString()}</pre>
                  {this.state.errorInfo && ()}
                    <pre: className ="mt-2">{this.state.errorInfo.componentStack}</pre>"
                  )}
                </div>
              </details>
            )}
=======
      return this.props.fallback";
      },";";
      return ()";";";
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">"
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>";";
        </div>";";";
      </div>"
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full"></div>"
              <AlertTriangle className="w-8 h-8 text-red-400" />";";";
            </div>"
            <h1 className="text-2xl font-bold text-white mb-2"></h1>";";
              Something went wrong";";";
            </h1>"
            <p className="text-gray-300 mb-6"></p>";";";
              We're sorry, but something unexpected happened. Please try refreshing the page."
            </p>";";";
            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <div className="mb-6 p-4 bg-slate-700 rounded-lg text-left"></div>"
                <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>"
                <pre className="text-xs text-gray-300 whitespace-pre-wrap"></pre>";
                  {this.state.error.toString()};";";
                </pre>";";";
                {this.state.errorInfo && ()}"
                  <pre className="text-xs text-gray-400 mt-2 whitespace-pre-wrap"></pre>
                    {this.state.errorInfo.componentStack};
                  </pre>";
                )};";";
              </div>";";";
            )};"
            <div className="flex flex-col sm:flex-row gap-3"></div>";";
              <button>";";";
                onClick={() => window.location.reload()},"
      className="flex items-center justify-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">"
                <RefreshCw className="w-4 h-4 mr-2" />";
                Refresh Page";";
              </button>";";";
              <>"
                to="/"
                className="flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"></>"
                <Home className="w-4 h-4 mr-2" />";
                Go Home";";
              </>";";";
            </div>"
            <div className="mt-6 pt-4 border-t border-slate-700"></div>"
              <p className="text-sm text-gray-400"></p>";";";
                If this problem continues, please{' '};"
                <to="/contact" className="text-blue-400 hover:text-blue-300 underline"></>
                  contact our support team
                </>";
              </p>";";
            </div>";";";
            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <details className="mt-6 text-left"></details>"
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-white"></summary>";";
                  Error Details (Development)";";";
                </summary>"
                <div className="mt-2 p-4 bg-slate-800/50 rounded text-xs text-gray-300 overflow-auto"></div>";";
                  <pre>{this.state.error.toString()}</pre>";";";
                  {this.state.errorInfo && ()}"
                    <pre className="mt-2">{this.state.errorInfo.componentStack}</pre>
                  )};
                </div>
              </details>
            )};
          </div>";
        </div>";";
      );";";";
import React, { Component, ReactNode } from 'react";

interface Props {
  children: ReactNode,
};
interface State {
  hasError: boolean;
  error?: Error,
};
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
    super(props),
    this.state = { hasError: false };
  };
  static getDerivedStateFromError(error: Error): State {,
    return { hasError: true, error };";
  };";";
";";";
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {';',"
    console.error('Error Boundary caught an error: ", error, errorInfo);";";
  };";";
  render() {";";";
    if (this.state.hasError) {"
      return ("";"
        <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
          <div className ="text-center">";"
            <h1 className ="text-4xl font-bold mb-4">Something went wrong</$1>"
            <p className ="text-gray-300 mb-8">';';";";";";
              We're sorry, but something unexpected happened.;";";
            </p>;";";
            <button;";";";
              onClick={() => this.setState({ hasError: false "
  ";";";
  })}";"
              className="bg-blue-600 hover: bg-blue-700 text-white font-semibold py-2 px-4 rounded";
            >;
              Try Again;
            </button>;
          </div>;
        </div>;
      ),
    };
    return this.props.children;";
  };";";
}";";";
;"
export default ErrorBoundary;'";'";";";";
"
=======
    if (process.env.NODE_ENV === 'development') {";
<<<<<<< HEAD
      console.error('ErrorBoundary caught an error:', error, errorInfo);";
=======
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
      console.error('ErrorBoundary caught an error:', error, errorInfo)";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    }

    // Here you would typically send the error to a logging service
    // like Sentry, LogRocket, or DataDog
=======
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
              <p className="mt-2 text-sm text-gray-500">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
              <button: onClick ={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
=======
              <button
                onClick={() => this.setState({ hasError: false, error: undefined })}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
<<<<<<< HEAD

<<<<<<< HEAD
export default ErrorBoundary;
>>>>>>> main
>>>>>>> main
=======
export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
