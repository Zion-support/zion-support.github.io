import React, { lazy, ComponentType, ComponentProps, Suspense } from 'react';

// Higher-order component for lazy loading
export function withLazyLoading<T extends ComponentType<any>>(
  Component: T,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  const WrappedComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
  WrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name})`;
  return WrappedComponent;
}

// Utility function to create lazy-loaded components
export function createLazyComponent<T extends ComponentType<any>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(importFunction);
  
  const WrappedComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
  WrappedComponent.displayName = `createLazyComponent(${Component.displayName || Component.name})`;
  return WrappedComponent;
}