import { lazy, ComponentType } from 'react';
import LazyWrapper from '../components/LazyWrapper';

// Higher-order component for lazy loading
export const withLazyLoading = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as Record<string, unknown>)} />
    </LazyWrapper>
  );
};

// Utility function to create lazy-loaded components
export const createLazyComponent = <P extends Record<string, unknown>>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunction);
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as Record<string, unknown>)} />
    </LazyWrapper>
  );
};