'use client';
import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryWrapperProps {
  children: ReactNode;
  className?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundaryWrapper extends Component<ErrorBoundaryWrapperProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryWrapperProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundaryWrapper:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`error-boundary ${this.props.className || ''}`}>
          <h2>Something went wrong.</h2>
          <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryWrapper;
