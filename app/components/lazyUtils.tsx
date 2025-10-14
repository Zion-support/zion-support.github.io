import React, { lazy, ComponentType } from 'react';
import LazyWrapper from './LazyWrapper';

// Higher-order component for lazy loading
export const withLazyLoading = <P extends Record<string, any>>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  const WrappedComponent = (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as any)} />
    </LazyWrapper>
  );
  
  return WrappedComponent;
};

// Utility function to create lazy-loaded components
export const createLazyComponent = <P extends Record<string, any>>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunction);
  
  const WrappedComponent = (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...(props as any)} />
    </LazyWrapper>
  );
  
  return WrappedComponent;
};