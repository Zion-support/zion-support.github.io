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
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from "react";
=======
import React, { Component, ReactNode } from 'react';
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

<<<<<<< HEAD
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
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
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
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Refresh Page
              </button>
            </div>
=======
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Try again
            </button>
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
          </div>
        </div>
      );
    }

    return this.props.children;
  }
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
}