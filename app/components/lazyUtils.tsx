import React from "react";

// Higher-order component for lazy loading
export function withLazyLoading<T extends ComponentType<Record<string, unknown>>>(
  Component: T,
  fallback?: React.ReactNode) {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: ComponentProps<T>) => (
<>    <Suspense fallback={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} /></LazyComponent>
    </Suspense>
  );
}

// Utility function to create lazy-loaded components
export function createLazyComponent<T extends ComponentType<Record<string, unknown>>>(
  importFunction: () => Promise<{ default: T }>,
  fallback?: React.ReactNode) {
  const LazyComponent = lazy(importFunction);
  
  return (props: ComponentProps<T>) => (
<>    <Suspense fallback={fallback || <div>Loading...</div>}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <LazyComponent {...(props as any)} /></LazyComponent>
    </Suspense>
  );
}
