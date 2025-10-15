<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

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
    };
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

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      console.error('Production error:', {
        error: error.message,
        stack: error.stack,
        errorInfo: errorInfo.componentStack,
        errorId: this.state.errorId
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    const errorReport = {
      errorId,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // In a real application, you would send this to your error reporting service
    console.log('Error report:', errorReport);
    
    // For now, we'll just copy to clipboard
    navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2))
      .then(() => alert('Error report copied to clipboard'))
      .catch(() => alert('Failed to copy error report'));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react',"
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react",
=======
import React, { Component, ErrorInfo, ReactNode } from 'react',";
>>>>>>> main
>>>>>>> main
      interface Props {},
      children: ReactNode,
      fallback?: ReactNode,
      onError?: (error: Error, errorInfo: ErrorInfo) => void
    },
    {};
interface State {},
      hasError: boolean,
      error?: Error,
      errorInfo?: ErrorInfo,
      errorId?: string
    },
    {};
class AdvancedErrorBoundary extends Component<Props, State> {},
      constructor(props: Props) {},
      super(props),
      this.state = { hasError: false };
    },
    {};
  static getDerivedStateFromError(error: Error): State {},
      return {},
      hasError: true,
      error,
<<<<<<< HEAD
      errorId= `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
=======
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
>>>>>>> main
    },
    {};
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {},
      this.setState({},)
      error,
<<<<<<< HEAD
      errorInfo
    })
=======
      errorInfo;
    });
>>>>>>> main
    // Call the onError callback if provided
    if ($1) {};
  // If body
interface Props {
  children: ReactNode;
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void,
};
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo,
};
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
    super(props),
<<<<<<< HEAD
    this.state = { hasError: false }
=======
    this.state = { hasError: false };
<<<<<<< HEAD
  };
  static getDerivedStateFromError(error: Error): State {,
    return { hasError: true, error };";
  };";";
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {";";,";
    console.error('Error caught by boundary:', error, errorInfo);";
    this.setState({ error, errorInfo 
  
  });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);";
    };";";
    // Log error to console in development";";";
    if (process.env.NODE_ENV === 'development") {},";";";
      console.error('Error caught by AdvancedErrorBoundary:", error, errorInfo)
=======
>>>>>>> main
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);";"
    this.setState({ error, errorInfo })
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    // Log error to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {},"
      console.error('Error caught by AdvancedErrorBoundary:', error, errorInfo)"
=======
    if (process.env.NODE_ENV === 'development') {},";
      console.error('Error caught by AdvancedErrorBoundary:', error, errorInfo)";
>>>>>>> main
>>>>>>> main
    },
    {};
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, {
    extra: errorInfo 
  
  })
    },
    {};
  handleRetry = () => {},
      this.setState({
    hasError: false, error: undefined, errorInfo: undefined 
  
  })
    },
    {};
  handleReload = () => {},
      window.location.reload()
    },";
    {};";";
  handleGoHome = () => {},";";";
      window.location.href = '/"
    },
<<<<<<< HEAD
    {};
  handleReportError = () => {},
      const const { error, errorId  } = this.state,
      const subject = `Error Report - ${errorId}`,
      const body = `
=======
    {}
  handleGoHome = () => {},
      window.location.href = '/'"
    },
    {}
  handleReportError = () => {},
      const { error, errorId } = this.state,
<<<<<<< HEAD
      const  subject = `Error Report - ${errorId}`,
      const  body = `
Error Details:
- Error ID: ${errorId}
- Message: ${error?.message}
- Stack: ${error?.stack}
- Timestamp: ${new Date().toISOString()}
- User Agent: ${navigator.userAgent}
- URL: ${window.location.href}
    `,
      const  mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      window.open(mailtoLink)
    },
    {}
  render() {},
      if (this.state.hasError) {}
=======
      const: subject = `Error Report - ${errorId}`,
      const: body = `
>>>>>>> main
Error Details:;
- Error ID: ${errorId};
- Message: ${error?.message};
- Stack: ${error?.stack};
- Timestamp: ${new Date().toISOString()};
- User Agent: ${navigator.userAgent};
- URL: ${window.location.href};
    `,
<<<<<<< HEAD
      const mailtoLink  =  `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      window.open(mailtoLink)
    },
    {};
=======
      const: mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      window.open(mailtoLink)
    },
    {}
>>>>>>> main
  render() {},;
      if (this.state.hasError) {};
>>>>>>> main
      // Use custom fallback if provided
      if (this.props.fallback) {},
<<<<<<< HEAD
      return this.props.fallback";
    },";";
    {}";";";
      return ()"
        <div className="min-h-screen bg-gray-50 dark: bg-gray-900 flex items-center justify-center px-4">"
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>";";
        </div>";";";
      </div>"
            <div className="flex justify-center mb-4"></div>"
              <AlertTriangle className="w-16 h-16 text-red-500" />
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {";
        return this.props.fallback;";,";
      }";";";
      return ("
        <div className ="min-h-screen flex items-center justify-center bg-gray-50 dark: bg-gray-900">";"
          <div className ="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">";"
            <div className ="flex items-center mb-4">";"
              <div className ="flex-shrink-0">";"
                <svg className ="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">","
                  <path strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />";";";
                </svg>";";";
              </div>"
              <div className ="ml-3">";"
                <h3 className ="text-lg font-medium text-gray-900 dark: text-white">";
                  Something went wrong";
                </h3>";";
              </div>";";";
            </div>"
            <div className ="mt-4">";"
              <p className ="text-sm text-gray-600 dark:text-gray-400">","
                We're sorry, but something unexpected happened. Please try refreshing the page.";";";";
              </p>"
              {process.env.NODE_ENV === 'development' && this.state.error && (";"
                <details className ="mt-4">";"
                  <summary className ="text-sm font-medium text-gray-700 dark: text-gray-300 cursor-pointer">";";";
                    Error Details";";";
                  </summary>"
                  <div className ="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">";"
                    <div className ="mb-2">",
                      <strong>Error:</strong> {this.state.error.message};
                    </div>";
                    {this.state.error.stack && (";";
                      <div>";";";
                        <strong>Stack:</strong>"
                        <pre className ="whitespace-pre-wrap">{this.state.error.stack}</$1>
                      </div>
                    )};
                  </div>";
                </details>";";
              )}";";";
            </div>"
            <p className="text-gray-600 dark:text-gray-300 mb-6"></p>";";";
              We're sorry, but something unexpected happened. Our team has been notified."
            </p>";";";
            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 text-left"></div>"
                <h3 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2"></h3>";";
                  Error Details (Development Only):";";";
                </h3>"
                <pre className="text-xs text-red-700 dark:text-red-300 whitespace-pre-wrap"></pre>
                  {this.state.error.message};";
                  {this.state.error.stack && `\n\n${this.state.error.stack}`};";";
                </pre>";";";
                {this.state.errorId && ()}"
                  <p className="text-xs text-red-600 dark:text-red-400 mt-2"></p>
                    Error ID: {this.state.errorId};
                  </p>";
                )};";";
              </div>";";";
            )};"
            <div className="space-y-3"></div>";";";
              <buttononClick={this.handleRetry},>"
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"></button";";";
>"
                <RefreshCw className="w-4 h-4 mr-2" />"
            <div className ="mt-6 flex space-x-3">";";";";
              <button onClick ={() => window.location.reload()}"
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"",
              >
                Refresh Page
              </button>
              <button onClick ={";
    () => this.setState({ hasError: false, error: undefined, errorInfo: undefined ";";
  ";";";
  })}"
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"";
              >";
                Try Again";";
              </button>";";";
              <buttononClick={this.handleReload},>"
      className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"></button";";";
>"
                <RefreshCw className="w-4 h-4 mr-2" />";
                Reload Page";";
              </button>";";";
              <buttononClick={this.handleGoHome},>"
      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"></button";";";
>"
                <Home className="w-4 h-4 mr-2" />";
                Go Home";";
              </button>";";";
              <buttononClick={this.handleReportError},>"
      className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"></button";";";
>"
                <Mail className="w-4 h-4 mr-2" />
=======
      return this.props.fallback
    },
    {}
      return ()
        <div  className ="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">"
        <div  className ="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
<<<<<<< HEAD
            <div  className ="flex justify-center mb-4"></div>"
              <AlertTriangle: className ="w-16 h-16 text-red-500" />"
=======
            <div: className ="flex justify-center mb-4"></div>";
              <AlertTriangle: className ="w-16 h-16 text-red-500" />";

  render() {
    if (this.state.hasError) {
>>>>>>> main
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-left">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  Error Details:
                </h3>
                <pre className="text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap">
                  {this.state.error.message}
                </pre>
                {this.state.error.stack && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-red-600 dark:text-red-400">
                      Stack Trace
                    </summary>
                    <pre className="text-xs text-red-600 dark:text-red-400 mt-2 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
              
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                If this problem persists, please report it to our support team.
              </p>
              <button
                onClick={this.handleReportError}
                className="flex items-center justify-center mx-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Error
              </button>
            </div>

            {this.state.errorId && (
              <div className="mt-4 text-xs text-gray-400">
                Error ID: {this.state.errorId}
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
=======
        <div: className ="min-h-screen flex items-center justify-center bg-gray-50 dark: bg-gray-900">";";
          <div: className ="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">";";
            <div: className ="flex items-center mb-4">";";
              <div: className ="flex-shrink-0">";";
                <svg: className ="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">",";
                  <path: strokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />";";
                </svg>
              </div>
              <div: className ="ml-3">";";
                <h3: className ="text-lg font-medium text-gray-900 dark: text-white">";";
                  Something went wrong
                </h3>
              </div>

>>>>>>> main
            </div>
            
            <div  className ="mt-4">"
              <p  className ="text-sm text-gray-600 dark:text-gray-400">","
                We're sorry, but something unexpected happened. Please try refreshing the page.";"
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (";"
                <details: className ="mt-4">"
                  <summary: className ="text-sm font-medium text-gray-700 dark: text-gray-300 cursor-pointer">"
                    Error Details
                  </summary>
                  <div  className ="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">"
                    <div  className ="mb-2">","
                      <strong>Error:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack:</strong>
                        <pre: className ="whitespace-pre-wrap">{this.state.error.stack}</pre>"
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
<<<<<<< HEAD
            
            <p  className ="text-gray-600 dark:text-gray-300 mb-6"></p>"
              We're sorry, but something unexpected happened. Our team has been notified.'"
=======

            <p: className ="text-gray-600 dark:text-gray-300 mb-6"></p>";
              We're sorry, but something unexpected happened. Our team has been notified.'";
>>>>>>> main
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && ()}"
              <div  className ="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 text-left"></div>"
                <h3  className ="text-sm font-medium text-red-800 dark:text-red-200 mb-2"></h3>"
                  Error Details (Development Only):
                </h3>
                <pre: className ="text-xs text-red-700 dark:text-red-300 whitespace-pre-wrap"></pre>"
                  {this.state.error.message}
                  {this.state.error.stack && `\n\n${this.state.error.stack}`}
                </pre>
                {this.state.errorId && ()}
                  <p  className ="text-xs text-red-600 dark:text-red-400 mt-2"></p>"
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}
            <div  className ="space-y-3"></div>"
              <buttononClick={this.handleRetry},>
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center""
              ></button
>
<<<<<<< HEAD
                <RefreshCw: className ="w-4 h-4 mr-2" />"
=======
                <RefreshCw: className ="w-4 h-4 mr-2" />";

            <div: className ="mt-6 flex space-x-3">";";
              <button: onClick ={() => window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"",";
              >
                Refresh Page
              </button>
              <button: onClick ={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"";";
              >

>>>>>>> main
                Try Again
              </button>
              
              <buttononClick={this.handleReload},>
      className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center""
              ></button
>
                <RefreshCw: className ="w-4 h-4 mr-2" />"
                Reload Page
              </button>
              
              <buttononClick={this.handleGoHome},>
      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center""
              ></button
>
                <Home: className ="w-4 h-4 mr-2" />"
                Go Home
              </button>
              
              <buttononClick={this.handleReportError},>
      className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center""
              ></button
>
<<<<<<< HEAD
                <Mail: className ="w-4 h-4 mr-2" />"
=======
                <Mail: className ="w-4 h-4 mr-2" />";
>>>>>>> main
>>>>>>> main
                Report Issue
              </button>
            </div>
          </div>
        </div>
      ),
<<<<<<< HEAD
    }

    return this.props.children
  }
}

export default AdvancedErrorBoundary
=======
    };
    return this.props.children;";
  };";";
}";";";
export default AdvancedErrorBoundary;"
>>>>>>> main
>>>>>>> main
