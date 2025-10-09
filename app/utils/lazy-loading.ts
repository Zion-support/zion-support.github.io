
import { lazy, Suspense } from 'react';

// Lazy load heavy components
export const LazyComponent = (importPath: string) => {
  return lazy(() => import(importPath));
};

// Loading fallback component
export const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
  </div>
);

// Higher-order component for lazy loading
export const withLazyLoading = (Component: React.ComponentType) => {
  return (props: any) => (
    <Suspense fallback={<LoadingFallback />}>
      <Component {...props} />
    </Suspense>
  );
};
