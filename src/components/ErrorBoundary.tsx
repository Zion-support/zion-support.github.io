<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import React, { Component, ReactNode } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> pr-12243

interface Props {}
  children: ReactNode;
}

<<<<<<< HEAD
interface State {
=======
interface Props {}
  children: ReactNode;
}
interface State {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}
<<<<<<< HEAD

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
=======
=======
class ErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {}
    super(props);
    this.state = { hasError: false };
  }'
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({}
      error,
      errorInfo;
    });
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error };
  }
<<<<<<< HEAD

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
>>>>>>> pr-12243
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>

            <div className="text-center">
              <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Something went wrong
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Page
                </button>

                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                    Error Details (Development)
                  </summary>
                  <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
                    <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap">
                      {this.state.error.toString()}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </div>
                </details>
              )}
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-gray-600 mb-4">
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {'
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }
  render() {}
    if (this.state.hasError) {}
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">"
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">"
            <div className="flex items-center mb-4">"
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">"
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>"
              <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>
            </div>"
            <p className="text-gray-600 mb-4">'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>"
            <div className="space-y-3">
<<<<<<< HEAD
=======
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.''
              </p>
            </div>
            <div className="mt-4">
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="mt-4">
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
=======
              <button;
                onClick={() => window.location.reload()}"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              >
                Refresh Page;
              </button>
<<<<<<< HEAD
>>>>>>> pr-12243
            </div>
=======
              <button;
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}"
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Try Again;
              </button>
            </div>'
            {process.env.NODE_ENV === 'development' && this.state.error && ("
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">"
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  Error Details (Development)
                </summary>"
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          </div>
        </div>
      );
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> pr-12243
export default ErrorBoundary
=======
export default ErrorBoundary;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return { hasError: true, error };
  };
,
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,'
    console.error('ErrorBoundary caught an error:', error, errorInfo),
    this.setState({,
      error,
      errorInfo,
    }),
  };
,
  render() {,
    if (this.state.hasError) {,
      return (,"
        <div className="min-h-screen flex items-center justify-center bg-gray-50">,"
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">,"
            <div className="flex items-center mb-4">,"
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">,"
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">,"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />,
                </svg>,
              </div>,"
              <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>,
            </div>,"
            <p className="text-gray-600 mb-4">,'
              We're sorry, but something unexpected happened. Please try refreshing the page.,
            </p>,"
            <div className="space-y-3">,
              <button,
                onClick={() => window.location.reload()};"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors",
              >,
                Refresh Page,
              </button>,
              <button,
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })};"
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover: bg-gray-200 transition-colors",
              >,
                Try Again,
              </button>,
            </div>,'
            {process.env.NODE_ENV === 'development' && this.state.error && (,"
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">,"
                <summary className="cursor-pointer text-sm font-medium text-gray-700">,
                  Error Details (Development),
                </summary>,"
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">,
                  {this.state.error.toString()};
                  {this.state.errorInfo?.componentStack};
                </pre>,
              </details>,
            )};
          </div>,
        </div>,
      ),
    };
,
    return this.props.children,
  };
};
,
export { ErrorBoundary };

    return this.props.children;
  }
}
export default ErrorBoundary;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
return { hasError: true, error }};
; componentDidCatch(error: Error, errorInfo: ErrorInfo) {; console.error('ErrorBoundary caught an error: ', error, errorInfo); this.setState({; error; errorInfo})};
; render() {; if (this.state.hasError) {; return (; <div className = "min-h-screen flex items-center justify-center bg-gray-50">; <div className = "max-w-md w-full bg-white shadow-lg rounded-lg p-6">; <div className = "flex items-center mb-4">; <div className = "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">; <svg className = "w-6 h-6 text-red-600" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">; <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />; </svg>; </div>; <h2 className = "text-xl font-semibold text-gray-900">Something went wrong</h2>; </div>; <p className = "text-gray-600 mb-4">; We're sorry, but something unexpected happened. Please try refreshing the page.; </p>; <div className = "space-y-3">; <button; onClick = {() = > window.location.reload()}; className = "w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors">, Refresh Page, </button>; <button; onClick = {() = > this.setState({ hasError: false, error: undefined, errorInfo: undefined })}; className = "w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover: bg-gray-200 transition-colors">, Try Again, </button>; </div>; {process.env.NODE_ENV = = = 'development' && this.state.error && (; <details className = "mt-4 p-4 bg-gray-100 rounded-lg">; <summary className = "cursor-pointer text-sm font-medium text-gray-700">; Error Details (Development); </summary>; <pre className = "mt-2 text-xs text-gray-600 overflow-auto">; {this.state.error.toString()}; {this.state.errorInfo?.componentStack}; </pre>; </details>; )}; </div>; </div>; )};
; return this.props.children}};
;
export { ErrorBoundary };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
    return this.props.children}
}";"
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
export default ErrorBoundary;
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> pr-12243
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
