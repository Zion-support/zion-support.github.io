'use client';
import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundaryWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { 
      hasError: true, 
      error 
    };
  }

  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by wrapper:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundary>
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're working to fix this issue. Please try again later.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </ErrorBoundary>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryWrapper;