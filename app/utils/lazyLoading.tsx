/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingStates from '../components/LoadingStates';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <LoadingStates /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

// Higher-order component for lazy loading
export const withLazyLoading = <P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      {/* @ts-expect-error - Complex generic type inference issue */}
      <LazyComponent {...props} />
    </LazyWrapper>
  );
};

// Utility function to create lazy-loaded components
export const createLazyComponent = <P extends Record<string, unknown>>(
  importFunction: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunction);
  
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      {/* @ts-expect-error - Complex generic type inference issue */}
      <LazyComponent {...props} />
    </LazyWrapper>
  );
};

export default LazyWrapper;