<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, ReactNode } from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30

interface Props {
  children: ReactNode;
}
<<<<<<< HEAD
=======

interface State {
  hasError: boolean;
  error?: Error;
=======

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

>>>>>>> cursor/fix-errors-and-merge-to-main-6f30

interface State {
  hasError: boolean;
  error?: Error;
}

<<<<<<< HEAD
export default class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Global error caught:', error, errorInfo);
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
}

export default class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
<<<<<<< HEAD
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
=======

    this.state = { hasError: false };
  };

  static getDerivedStateFromError(error: Error): State {
    return {,
      hasError: true,
      error,

  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development

    }


    this.setState({
    error,
      errorInfo,

>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Error</h1>
            <p className="text-gray-600 mb-8">Something went wrong with the application</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Reload Application
            </button>
=======
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Application Error</h3>
              <p className="mt-2 text-sm text-gray-500">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
=======

                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}



                Go Home
              </Link>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30
          </div>
        </div>
      );
    }

<<<<<<< HEAD
    return this.props.children;
  }
}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
    }

    return this.props.children;
  }
}
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
>>>>>>> cursor/fix-errors-and-merge-to-main-6f30
