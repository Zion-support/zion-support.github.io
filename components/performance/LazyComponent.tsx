import React, { Suspense, ComponentType } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface LazyComponentProps {
  fallback?: React.ReactNode;
}

const LazyComponent = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyWrapper = (props: P & LazyComponentProps) => {
    return (
      <Suspense fallback={fallback || <LoadingSpinner />}>
        <Component {...props} />
      </Suspense>
    );
  };

  LazyWrapper.displayName = `LazyComponent(${Component.displayName || Component.name})`;

  return LazyWrapper;
};

export default LazyComponent;