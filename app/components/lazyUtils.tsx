import React, { lazy, ComponentType, ComponentProps, Suspense } from 'react';

// Higher-order component for lazy loading
<<<<<<< HEAD
export function withLazyLoading<T extends ComponentType<unknown>>(
=======
export function withLazyLoading<T extends ComponentType<any>>(
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
  Component: T,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  const WrappedComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
<<<<<<< HEAD
      <LazyComponent {...(props as ComponentProps<T>)} />
=======
      <LazyComponent {...(props as any)} />
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
    </Suspense>
  );
  WrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name})`;
  return WrappedComponent;
}

// Utility function to create lazy-loaded components
<<<<<<< HEAD
export function createLazyComponent<T extends ComponentType<unknown>>(
=======
export function createLazyComponent<T extends ComponentType<any>>(
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(importFunction);
  
  const WrappedComponent = (props: ComponentProps<T>) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
<<<<<<< HEAD
      <LazyComponent {...(props as ComponentProps<T>)} />
=======
      <LazyComponent {...(props as any)} />
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
    </Suspense>
  );
  WrappedComponent.displayName = `createLazyComponent(${Component.displayName || Component.name})`;
  return WrappedComponent;
}