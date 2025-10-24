'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD

=======
>>>>>>> origin/main
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
<<<<<<< HEAD

=======
>>>>>>> origin/main
interface State {
  hasError: boolean;
  error?: Error;
}
<<<<<<< HEAD

=======
>>>>>>> origin/main
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

=======
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
>>>>>>> origin/main
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
<<<<<<< HEAD

    return this.props.children;
  }
}

=======
    return this.props.children;
  }
}
>>>>>>> origin/main
export default ErrorBoundary;