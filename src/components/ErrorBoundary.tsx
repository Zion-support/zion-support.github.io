<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
<<<<<<< HEAD
import { Component, type ErrorInfo, type ReactNode } from 'react';
=======
import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
>>>>>>> main
}

interface State {
  hasError: boolean;
  error?: Error;
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
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: undefined })}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Try again
            </button>
=======
  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Error caught by boundary
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center p-8">
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="text-6xl mb-4">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
=======
<<<<<<< HEAD
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
=======
            <div className="w-16 h-16 text-red-500 mx-auto mb-4 text-6xl">⚠️</div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Refresh Page
            </button>
            <p className="text-gray-400 mb-8">We're working to fix this issue.</p>
>>>>>>> main
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
export default ErrorBoundary;
>>>>>>> main
