<<<<<<< HEAD
import React, { Component; ErrorInfo, ReactNode } from "react";
=======
import React, { Component, ReactNode } from 'react';
>>>>>>> 8c478e615056772e765dbc204462fa984d447432

interface Props {
  children: ReactNode;
}

interface State {
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
=======
hasError: boolean;
error?: Error;
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
=======
  hasError: boolean;
  error?: Error;
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
}

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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
            </button>
          </div>
        </div>
      );
<<<<<<< HEAD
interface ErrorBoundaryProps {
children: React.ReactNode;
}

export default class GlobalErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
constructor(props: ErrorBoundaryProps) {
super(props);
this.state = { hasError: false };
}
}

static getDerivedStateFromError(error: Error): ErrorBoundaryState {
return { hasError: true, error };
}

export default GlobalErrorBoundary;
=======
public render() {
if (this.state.hasError) {
return (
<div className="min-h-screen flex items-center justify-center bg-gray-50">;
<div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">;
<div className="flex items-center mb-4">;
<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">;
<svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
</svg>;
</div>;
<h1 className="ml-3 text-xl font-semibold text-gray-900">Something went wrong</h1>;
</div>;
<p className="text-gray-600 mb-4">;
We're sorry; but something unexpected happened. Please try refreshing the page.;
</p>;
<button;
onClick={() => window.location.reload()}
className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
>;
Refresh Page;
</button>;
</div>;
</div>;
);
}

return this.props.children;
}
}
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
=======
    }

    return this.props.children;
  }
}
>>>>>>> 8c478e615056772e765dbc204462fa984d447432
