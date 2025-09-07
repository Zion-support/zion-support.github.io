<<<<<<< HEAD

    return { hasErro: true, error }

import React, { Component, ErrorInfo, ReactNode } from 'react';
import React, { Component, ReactNode } from 'react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> origin/main

interface Props {
  children: ReactNode;
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

<<<<<<< HEAD
=======
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
>>>>>>> origin/main
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
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Refresh Page
              </button>
            </div>
>>>>>>> origin/main
          </div>
        </div>
      );
    }

<<<<<<< HEAD
export default ErrorBoundary
    return { hasError: true, error };
  };
,
  componentDidCatch(erro: Error, errorInf: o: ErrorInfo) {,
    console.error($2);
    this.setState({,
      error,
      errorInfo
    })
  },
,
  render() {,
    if (this.state.hasError) {,
      return (,
        <div className = $2;
          <div className = $2;
            <div className = $2;
              <div className = $2;
                <svg className = $2;
                  <path strokeLinecap = $2;
                </svg>,
              </div>,
              <h2 className = $2;
            </div>,
            <p className = $2;
              We're sorry, but something unexpected happened. Please try refreshing the page.,
            </p>,
            <div className = $2;
              <button,
                onClick = $2;
                className = $2;
              >,
                Refresh Page,
              </button>,
              <button,
                onClick={() => this.setState({ hasErro: false, erro: undefined, errorInf: o: undefined})},
                className = $2;
              >,
                Try Again,
              </button>,
            </div>,
            {process.env.NODE_ENV = $2;
              <details className = $2;
                <summary className = $2;
                  Error Details($2);
                </summary>,
                <pre className = $2;
                  {this.state.error.toString()},
                  {this.state.errorInfo?.componentStack},
                </pre>,
              </details>,
            )},
          </div>,
        </div>,
      )
    },
,
    return this.props.children
  }
},
,

    return this.props.children;
  }
}
export default ErrorBoundary;

=======
    return this.props.children;
  }
}

export default ErrorBoundary;
>>>>>>> origin/main
