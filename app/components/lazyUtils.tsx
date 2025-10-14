import React, { lazy, ComponentType } from 'react';
import LazyWrapper from './LazyWrapper';

// Higher-order component for lazy loading
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withLazyLoading<T extends ComponentType<any>>(
  Component: T,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  );
}

// Utility function to create lazy-loaded components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createLazyComponent<T extends ComponentType<any>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunction);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  );
}
