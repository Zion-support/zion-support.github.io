import React, { Suspense, ReactNode, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface OptimizedSuspenseProps {
  children: ReactNode;
  fallback?: ReactNode;
  delay?: number;
  timeout?: number;
}

export const OptimizedSuspense: React.FC<OptimizedSuspenseProps> = ({
  children,
  fallback = <LoadingSpinner size="lg" text="Loading..." />,
  delay = 200,
  timeout = 10000
}) => {
  const [showFallback, setShowFallback] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);

  useEffect(() => {
    // Delay showing fallback to avoid flash of loading state
    const delayTimer = setTimeout(() => {
      setShowFallback(true);
    }, delay);

    // Timeout fallback to show error state
    const timeoutTimer = setTimeout(() => {
      setIsTimedOut(true);
    }, timeout);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(timeoutTimer);
    };
  }, [delay, timeout]);

  // Show timeout error if component takes too long to load
  if (isTimedOut) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="text-red-500 mb-4">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Loading Timeout
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This component is taking longer than expected to load.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <Suspense fallback={showFallback ? fallback : null}>
      {children}
    </Suspense>
  );
};

// Higher-order component for lazy loading with error boundaries
export const withLazyLoading = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  const LazyComponent = React.lazy(() => 
    Promise.resolve({ default: Component }).catch(error => {
      console.error('Error loading component:', error);
      return {
        default: () => (
          <div className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Failed to Load Component</h3>
              <p className="text-gray-600 mb-4">There was an error loading this component.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )
      };
    })
  );

  return (props: P) => (
    <OptimizedSuspense fallback={fallback}>
      <LazyComponent {...props} />
    </OptimizedSuspense>
  );
};

export default OptimizedSuspense;