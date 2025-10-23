"use client";
import React from "react";

interface GlobalErrorBoundaryState {
  hasError: boolean;
  error: Error | undefined;
}

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

class GlobalErrorBoundary extends React.Component<
  GlobalErrorBoundaryProps,
  GlobalErrorBoundaryState
> {
  constructor(props: GlobalErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error: Error): GlobalErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Global error caught:", error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <details className="text-left">
              <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                Error Details
              </summary>
              <pre className="mt-2 text-sm text-gray-500 overflow-auto">
                {this.state.error?.stack}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
