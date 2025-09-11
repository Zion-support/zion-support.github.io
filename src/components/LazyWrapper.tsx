import React, { Suspense, lazy, ComponentType } from 'react';
import Loading from './Loading';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <Loading fullScreen text="Loading page..." />
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </motion.div>);
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => 
    Promise.resolve({ default: Component })
  );

  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  );
};

export default LazyWrapper;