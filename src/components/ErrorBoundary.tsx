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

interface Props {
  children: ReactNode;
}

interface Props {
  children: ReactNode;
}
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

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

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

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {

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

          </div>
        </div>
      );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }

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
    return this.props.children;
  }
}

export default ErrorBoundary;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
=======
>>>>>>> main
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
