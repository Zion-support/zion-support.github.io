import React from "react";

const LazyWrapper: React.FC = () => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
)
}

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
);
};

export default LazyWrapper;

