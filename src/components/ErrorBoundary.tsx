<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ReactNode } from 'react';
=======
import React, { Component, ReactNode, ErrorInfo } from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  errorInfo?: ErrorInfo;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
=======
    if (this.state.hasError) {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </div>
        </div>
      );
    }
<<<<<<< HEAD

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
export default ErrorBoundary;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
