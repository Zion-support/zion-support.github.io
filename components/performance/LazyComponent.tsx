import React, { Suspense, lazy } from 'react';
import SkeletonLoader from '../SkeletonLoader';

interface LazyComponentProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
}

const LazyComponent: React.FC<LazyComponentProps> = ({ 
  component, 
  fallback = <SkeletonLoader /> 
}) => {
  const LazyLoadedComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyLoadedComponent />
    </Suspense>
  );
};

export default LazyComponent;