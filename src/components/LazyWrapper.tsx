import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface LazyWrapperProps {
  fallback?: React.ReactNode;
}

const LazyWrapper = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc);

  return React.forwardRef<any, P & LazyWrapperProps>((props, ref) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ))
};
export default LazyWrapper;
