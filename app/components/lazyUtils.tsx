import React, { lazy, ComponentType, ComponentProps } from 'react';
import LazyWrapper from './LazyWrapper';

// Higher-order component for lazy loading
export function withLazyLoading<T extends ComponentType<Record<string, unknown>>>(
  Component: T,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: ComponentProps<T>) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as Record<string, unknown>)} />
    </LazyWrapper>
  );
}

// Utility function to create lazy-loaded components
export function createLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) {
  const LazyComponent = lazy(importFunction);
  
  return (props: ComponentProps<T>) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as Record<string, unknown>)} />
    </LazyWrapper>
  );
}
