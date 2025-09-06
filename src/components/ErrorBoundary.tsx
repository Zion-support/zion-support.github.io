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
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
=======
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
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
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error:', error, errorInfo);
=======
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
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
<<<<<<< HEAD
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
=======
      return (
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
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
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
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

<<<<<<< HEAD
    return this.props.children;
  }
}

export default ErrorBoundary;
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
export default ErrorBoundary
    return { hasError: true, error };
  };
,
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    console.error('ErrorBoundary caught an error:', error, errorInfo),
    this.setState({,
      error,
      errorInfo,
    }),
  };
,
  render() {,
    if (this.state.hasError) {,
      return (,
        <div className="min-h-screen flex items-center justify-center bg-gray-50">,
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">,
            <div className="flex items-center mb-4">,
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">,
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">,
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />,
                </svg>,
              </div>,
              <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>,
            </div>,
            <p className="text-gray-600 mb-4">,
              We're sorry, but something unexpected happened. Please try refreshing the page.,
            </p>,
            <div className="space-y-3">,
              <button,
                onClick={() => window.location.reload()};
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors",
              >,
                Refresh Page,
              </button>,
              <button,
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })};
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover: bg-gray-200 transition-colors",
              >,
                Try Again,
              </button>,
            </div>,
            {process.env.NODE_ENV === 'development' && this.state.error && (,
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">,
                <summary className="cursor-pointer text-sm font-medium text-gray-700">,
                  Error Details (Development),
                </summary>,
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
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
