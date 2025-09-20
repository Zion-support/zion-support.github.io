'use client';

import React, { Suspense, lazy, ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface LazyLoadWrapperProps {
  componentPath: string,
  fallback?: React.ReactNode,
  errorFallback?: React.ComponentType<{ error: Error, resetErrorBoundary: () => void }>,
}

const defaultFallback = (
  <div className="flex items-center justify-center min-h-[200px] bg-gray-100 dark: bg-gray-800 rounded-lg">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
),

const defaultErrorFallback = ({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[200px] bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
    <div className="text-red-600 dark:text-red-400 text-center">
      <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
      <p className="text-sm mb-4">Failed to load component: {error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
),

// Cache for lazy-loaded components
const componentCache = new Map<string, ComponentType<any>>();

const LazyLoadWrapper: React.FC<LazyLoadWrapperProps> = ({
  componentPath,
  fallback = defaultFallback,
  errorFallback = defaultErrorFallback,
}) : any => {
  // Check if component is already cached
  if (!componentCache.has(componentPath)) {
    try {
      const LazyComponent = lazy(() => import(`../${componentPath}`));
      componentCache.set(componentPath, LazyComponent);
    } catch (error) {
      console.error(`Failed to load component: ${componentPath}`, error);
      return <div className="text-red-500">Failed to load component: {componentPath}</div>;
  }
  }

  const LazyComponent = componentCache.get(componentPath);

  if (!LazyComponent) {
    return <div className="text-red-500">Component not found: {componentPath}</div>;
  }

  return (
    <ErrorBoundary FallbackComponent={errorFallback}>
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyLoadWrapper;