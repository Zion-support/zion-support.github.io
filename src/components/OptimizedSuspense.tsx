import React, { Suspense, ComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface OptimizedSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorBoundary?: ComponentType<{ children: React.ReactNode }>;
}

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Suspense Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[200px] p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              Failed to load this section. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const OptimizedSuspense: React.FC<OptimizedSuspenseProps> = ({
  children,
  fallback = <LoadingSpinner />,
  errorBoundary: ErrorBoundaryComponent = ErrorBoundary,
}) => {
  return (
    <ErrorBoundaryComponent>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundaryComponent>
  );
};

export default OptimizedSuspense;