'use client';
import React from 'react';

<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}
=======
interface ErrorBoundaryState {
  hasError: boolean;
  _error: Error | undefined}
>>>>>>> 37f1b5c5f3c3e6c4c4ce4d59d91fac2c3215daf9

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error | undefined; resetError: () => void }>}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, _error: undefined }}

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    return { hasError: true, _error }}

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
=======
  override componentDidCatch(_error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', _error, errorInfo)}
>>>>>>> 37f1b5c5f3c3e6c4c4ce4d59d91fac2c3215daf9
  }

  resetError = () => {
    this.setState({ hasError: false, _error: undefined })};

  override render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try again
=======
      const FallbackComponent = this.props.fallback;
      if (FallbackComponent) {
        return <FallbackComponent error={this.state._error} resetError={this.resetError} />}

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={this.resetError}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
>>>>>>> 37f1b5c5f3c3e6c4c4ce4d59d91fac2c3215daf9
            </button>
          </div>
        </div>
      )}

    return this.props.children}
}

export default ErrorBoundary;