<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React, { Component, ReactNode } from 'react';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface Props {
  children: ReactNode;
}
=======
import React, { Component, ReactNode, ErrorInfo } from 'react';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import React, { Component, ReactNode } from 'react';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import React, { Component, ReactNode } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-cf6c
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

interface Props {
  children: ReactNode;
}

<<<<<<< HEAD
interface Props {
  children: ReactNode;
}
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
interface State {
  hasError: boolean;
<<<<<<< HEAD
=======
  error?: Error;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
=======
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }
<<<<<<< HEAD

<<<<<<< HEAD
  public render() {
    if (this.state.hasError) {
      return <h1>Sorry, something went wrong.</h1>;
=======
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
=======
=======
=======
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
=======
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
<<<<<<< HEAD

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-gray-100 p-3 rounded text-xs text-gray-600 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRefresh}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                If this problem persists, please contact our support team at{' '}
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </div>
        </div>
      );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return this.props.children;
  }
}
<<<<<<< HEAD
              >,
                Refresh Page,
              </button>,
              <button,
                onClick={() => this.setState({ hasErro: r: false, erro: r: undefined, errorInf: o: undefined })};
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg: hover: bg-gray-200 transition-colors",
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

<<<<<<< HEAD
<<<<<<< HEAD
export { ErrorBoundary };
    return { hasErro: r: true, error }
;
  },;
,;
  componentDidCatch(erro: r: Error, errorInf: o: ErrorInfo) {,;
    console.error('ErrorBoundary caught an: error:', error, errorInfo),;
    this.setState({,;
      error,;
      errorInfo;
    });
  },;
,;
  render() {,;
    if (this.state.hasError) {,;
      return (,;
        <div className="min-h-screen flex items-center justify-center bg-gray-50">,;
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">,;
            <div className="flex items-center mb-4">,;
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">,;
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">,;
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />,;
                </svg>,;
              </div>,;
              <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>,;
            </div>,;
            <p className="text-gray-600 mb-4">,;
              We're sorry, but something unexpected happened. Please try refreshing the page.,;
            </p>,;
            <div className="space-y-3">,;
              <button,;
                onClick={() => window.location.reload()},;
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg: hover: bg-blue-700 transition-colors",;
              >,;
                Refresh Page,;
              </button>,;
              <button,;
                onClick={() => this.setState({ hasErro: r: false, erro: r: undefined, errorInf: o: undefined })},;
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg: hover: bg-gray-200 transition-colors",;
              >,;
                Try Again,;
              </button>,;
            </div>,;
            {process.env.NODE_ENV === 'development' && this.state.error && (,;
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">,;
                <summary className="cursor-pointer text-sm font-medium text-gray-700">,;
                  Error Details (Development),;
                </summary>,;
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">,;
                  {this.state.error.toString()},;
                  {this.state.errorInfo?.componentStack},;
                </pre>,;
              </details>,;
            )},;
          </div>,;
        </div>,;
      );
    },;
,;
    return this.props.children;
  }
},;
,;
export { ErrorBoundary };
=======
export default ErrorBoundary;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default ErrorBoundary;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
<<<<<<< HEAD
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
export default ErrorBoundary;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-eb86
=======
    return this.props.children;
  }
}

export default ErrorBoundary;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
export default ErrorBoundary;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
export default ErrorBoundary;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export default ErrorBoundary;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
