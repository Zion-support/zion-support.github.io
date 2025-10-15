<<<<<<< HEAD
<<<<<<< HEAD
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
=======

interface Props {
  children: ReactNode
  fallback?: ReactNode
}


interface State {

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
  }

  render() {
    if (this.state.hasError) {
      return (
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
          </div>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GlobalErrorBoundary = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GlobalErrorBoundary - Zion Tech Group</title>
        <meta name="description" content="Advanced GlobalErrorBoundary solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            GlobalErrorBoundary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive GlobalErrorBoundary solutions designed to transform your business
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - GlobalErrorBoundary Solutions</p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
    }

    return this.props.children;
  }
}
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-errors-and-merge-to-main-2dd2
=======
export default GlobalErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
