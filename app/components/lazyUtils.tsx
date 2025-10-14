import React, { lazy, ComponentType, ComponentProps, Suspense } from 'react';

// Higher-order component for lazy loading
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withLazyLoading<T extends ComponentType<any>>(
  Component: T,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Utility function to create lazy components with custom fallbacks
export function createLazyComponent<T extends ComponentType<any>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(importFunction);
  
  return (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

// Pre-configured lazy loading wrapper with default fallback
export const withDefaultLazyLoading = <T extends ComponentType<any>>(Component: T) =>
  withLazyLoading(Component, <div className="flex items-center justify-center p-4">Loading...</div>);