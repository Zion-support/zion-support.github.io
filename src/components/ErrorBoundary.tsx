import React, { Component, ErrorInfo, ReactNode } from 'react';

<<<<<<< HEAD
interface Props { children: ReactNod e;
=======
interface Props {
  children: ReactNode;
>>>>>>> merge-all-prs-20250904-105408
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
<<<<<<< HEAD
  public state: Stat e = { hasError: fals e
    };

  public static getDerivedStateFromError(error: Erro r): State {
    return { hasError: tru e, error };
  }

  public componentDidCatch(error: Erro r, errorInfo: ErrorInf o) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Send error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
=======
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      console.error('Production error:', { error, errorInfo });
>>>>>>> merge-all-prs-20250904-105408
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
<<<<<<< HEAD
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"  />
=======
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
>>>>>>> merge-all-prs-20250904-105408
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
              <p className="mt-2 text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => window.location.reload()}
<<<<<<< HEAD
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-offset-2 focus: rin g-blue-500"
=======
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
>>>>>>> merge-all-prs-20250904-105408
                >
                  Refresh Page
                </button>
              </div>
<<<<<<< HEAD
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.'
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: b g-blue-700 focus: outlin e-none focus: rin g-2 focus: rin g-blue-500"
              >
                Refresh Page
              </button>
=======
>>>>>>> merge-all-prs-20250904-105408
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
</svg>
</div>
</Props>