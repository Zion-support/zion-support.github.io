import React, { Suspense, lazy, ComponentType } from 'react';
import { DefaultFallback } from './LazyWrapperConstants';

interface LazyWrapperProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  fallback = <DefaultFallback />, 
  children 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

LazyWrapper.displayName = 'LazyWrapper';

// Lazy loading helper function
export const createLazyComponent = <P extends Record<string, any>>(
  importFunc: () => Promise<{ default: ComponentType<P> }>
) => {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: P) => (
    <LazyWrapper>
      <LazyComponent {...(props as any)} />
    </LazyWrapper>
  );
  
  WrappedComponent.displayName = 'LazyComponent';
  return WrappedComponent;
};

export default LazyWrapper;