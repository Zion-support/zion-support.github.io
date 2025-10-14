import React, { lazy, ComponentType } from 'react';
import LazyWrapper from './LazyWrapper';

// Higher-order component for lazy loading
export function withLazyLoading<P = Record<string, never>>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as Record<string, unknown>)} />
    </LazyWrapper>
  );
}

// Utility function to create lazy-loaded components
export function createLazyComponent<P = Record<string, never>>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunction);
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as Record<string, unknown>)} />
    </LazyWrapper>
  );
}
