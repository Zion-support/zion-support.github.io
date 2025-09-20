<<<<<<< HEAD
import React from 'react';

interface ErrorBoundaryState {
hasError: boolean;
error?: Error;
}

interface ErrorBoundaryProps {
children: React.ReactNode;
}

export default class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
constructor(props: ErrorBoundaryProps) {
super(props);
this.state = { hasError: false };
}

static getDerivedStateFromError(error: Error): ErrorBoundaryState {
return { hasError: true, error };
}

componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
console.error('Error caught by boundary:', error, errorInfo);
}

render() {
if (this.state.hasError) {
return (
<div className="min-h-screen bg-zion-blue flex items-center justify-center">
<div className="text-center max-w-md mx-auto px-4">
<h1 className="text-3xl font-bold text-white mb-4">Something went wrong</h1>
<p className="text-zion-slate-light mb-8">
We're sorry, but something unexpected happened. Please try refreshing the page.
</p>
<button
onClick={() => window.location.reload()}
className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-3 rounded-lg transition-colors"
>
Refresh Page
</button>
</div>
</div>
);
}

return this.props.children;
}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">Something went wrong</h1>
            </div>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}