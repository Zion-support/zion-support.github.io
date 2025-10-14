import React, { lazy, ComponentType, ComponentProps, Suspense } from 'react';

// Higher-order component for lazy loading
export function withLazyLoading<T extends ComponentType<Record<string, unknown>>>(
  Component: T,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  const WrappedComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...(props as ComponentProps<T>)} />
    </Suspense>
  );
  
  WrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name || 'Component'})`;
  
  return WrappedComponent;
}

// Utility function to create lazy-loaded components
export function createLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(importFunction);
  
  const WrappedComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...(props as ComponentProps<T>)} />
    </Suspense>
  );
  
  WrappedComponent.displayName = `createLazyComponent(${LazyComponent.name || 'Component'})`;
  
  return WrappedComponent;
}