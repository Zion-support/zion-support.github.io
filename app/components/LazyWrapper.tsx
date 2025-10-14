<<<<<<< HEAD
import React, { Suspense, lazy, ComponentType } from 'react'
import LoadingSpinner from './LoadingSpinner'
<<<<<<< HEAD
interface LazyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode}
import React, { Suspense, lazy, ComponentType } from 'react';
import LoadingSpinner from './LoadingSpinner";
interface LazyWrapperProps {children: React.ReactNode;
  fallback?: React.ReactNode}
const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <LoadingSpinner size="lg" text="Loading component..." /> }"
}) => {
  return (}
    <Suspense fallback={fallback}>
=======
interface LazyWrapperProps { children: React.ReactNode
  fallback?: React.ReactNode }
import React, { Suspense, lazy, ComponentType } from 'react';'
import LoadingSpinner from './LoadingSpinner';
interface LazyWrapperProps { children: React.ReactNode;
  fallback?: React.ReactNode; }
}
const LazyWrapper: React.FC<LazyWrapperProps> = ({ children, 
  fallback = <LoadingSpinner size="lg" text="Loading component..." /> }
}) => { return ( }
    <Suspense fallback={fallback}>
      { children }
=======
import React, { Suspense } from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyWrapper: React.FC<LazyWrapperProps> = ({ children, fallback }) => {
  return (
    <Suspense fallback={fallback || <div className="p-4">Loading...</div>}>
>>>>>>> origin/main
      {children}
>>>>>>> origin/main
    </Suspense>
<<<<<<< HEAD
  )
  )
// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType<P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
) => {}
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }))
  return (props: P) => (
    <LazyWrapper fallback={fallback}>
      <LazyComponent {...props} />
    </LazyWrapper>
  )
export default LazyWrapper;
  )
export default LazyWrapper
}
export default LazyWrapper';
=======
  );
};

export default LazyWrapper;
>>>>>>> origin/main
