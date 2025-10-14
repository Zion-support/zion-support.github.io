import React from "react";

// Higher-order component for lazy loading
export function withLazyLoading<T extends ComponentType<Record<string, unknown>>>(
  Component: T,
  fallback?: React.ReactNode) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  const WrappedComponent = (props: React.ComponentProps<T>) => {
     
    const LazyComponentAny = LazyComponent as unknown;
    return (
      <Suspense fallback={fallback || <div>Loading...</div>}>
        <LazyComponentAny {...props} />
      </Suspense>
    );
  };
  WrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
}

// Utility function to create lazy-loaded components
export function createLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode) {
  const LazyComponent = lazy(importFunction);
  
  const WrappedComponent = (props: React.ComponentProps<T>) => {
     
    const LazyComponentAny = LazyComponent as unknown;
    return (
      <Suspense fallback={fallback || <div>Loading...</div>}>
        <LazyComponentAny {...props} />
      </Suspense>
    );
  };
  WrappedComponent.displayName = 'createLazyComponent';
  return WrappedComponent;
}
