import React, { Suspense, lazy, ComponentType } from 'react';
import { LoadingPage } from './LoadingStates';

interface LazyWrapperProps {
  fallback?: React.ComponentType;
  errorFallback?: React.ComponentType<{ error: Error; retry: () => void }>;
}

/**
 * Enhanced lazy loading wrapper with error boundaries and loading states
 */
export function createLazyWrapper<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyWrapperProps = {}
) {
  const LazyComponent = lazy(importFn);
  
  const WrappedComponent: React.FC<React.ComponentProps<T>> = (props) => {
    const FallbackComponent = options.fallback || LoadingPage;
    
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
  
  WrappedComponent.displayName = `LazyWrapper(${LazyComponent.displayName || 'Component'})`;
  
  return WrappedComponent;
}

/**
 * Preload a lazy component for better performance
 */
export function preloadLazyComponent(importFn: () => Promise<any>) {
  return () => {
    importFn().catch(() => {
      // Silently handle preload errors
    });
  };
}

export default createLazyWrapper;