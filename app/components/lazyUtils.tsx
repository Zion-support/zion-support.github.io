import React, { lazy, ComponentType, Suspense } from 'react';

// Higher-order component for lazy loading
export function withLazyLoading<P = Record<string, never>>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
}

// Utility function to create lazy-loaded components
export function createLazyComponent<P = Record<string, never>>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunction);
  
  return (props: P) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
}
