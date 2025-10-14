import React, { lazy, ComponentType, ComponentProps, Suspense } from 'react';

// Higher-order component for lazy loading
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withLazyLoading<T extends ComponentType<any>>(
  Component: T,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
<<<<<<< HEAD
  const WrappedComponent = (props: ComponentProps<T>) => (
=======
  return (props: ComponentProps<T>) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-71c6
    <Suspense fallback={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
<<<<<<< HEAD
  
  WrappedComponent.displayName = `withLazyLoading(${Component.displayName || Component.name || 'Component'})`;
  
  return WrappedComponent;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-71c6
}

// Utility function to create lazy-loaded components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createLazyComponent<T extends ComponentType<any>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode,
) {
  const LazyComponent = lazy(importFunction);
  
<<<<<<< HEAD
  const WrappedComponent = (props: ComponentProps<T>) => (
=======
  return (props: ComponentProps<T>) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-71c6
    <Suspense fallback={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} />
    </Suspense>
  );
<<<<<<< HEAD
  
  WrappedComponent.displayName = `createLazyComponent(Component)`;
  
  return WrappedComponent;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-71c6
}