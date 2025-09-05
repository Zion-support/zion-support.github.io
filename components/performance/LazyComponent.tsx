import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {
  fallback?: React.ReactNode;
  [key: string]: any;
}

const LazyComponent = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunc);

  return React.forwardRef<any, P & LazyComponentProps>((props, ref) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ));
};

export default LazyComponent;