/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { lazy, ComponentType, Suspense } from 'react';
import LazyWrapper from './LazyWrapper';

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as object)} />
      </Suspense>
    </LazyWrapper>
  );
};

// Utility function to create lazy-loaded components
export const createLazyComponent = <P extends object>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunction);
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as object)} />
      </Suspense>
    </LazyWrapper>
  );
};