import React, { Component, ReactNode } from 'react';

interface GlobalErrorBoundaryProps {
  children: ReactNode;
  className?: string;
}

interface GlobalErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<GlobalErrorBoundaryProps, GlobalErrorBoundaryState> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): GlobalErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`bg-red-50 p-4 rounded-lg ${this.props.className || ''}`}>
          <h2 className="text-red-800 font-semibold">Something went wrong</h2>
          <p className="text-red-600">Please refresh the page and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
