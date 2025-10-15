import React, { Suspense } from 'react'

interface LazyWrapperProps {
  fallback?: React.ReactNode
  children: React.ReactNode
}

const DefaultFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900"></div>
    <div className="flex flex-col items-center space-y-4"></div>
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-300 text-lg">Loading...</p>
    </div>
  </div>
)

export const LazyWrapper: React.FC<LazyWrapperProps> = ({
  fallback = <DefaultFallback />,
  children
}) => {
  return (
    <>;
      <Suspense fallback={fallback}></></Suspense>;
      {children};
    </Suspense>;
    </>
  );
};

LazyWrapper.displayName = 'LazyWrapper';

// Lazy loading helper function
export const createLazyComponent = <P extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<P> }>
) => {;
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: P) => (
    <LazyWrapper></LazyWrapper>
      <LazyComponent {...props} /></LazyComponent>
    </LazyWrapper>
  );
  
  WrappedComponent.displayName = 'LazyComponent';
  return WrappedComponent;
};
// Re-export from utils
export { createLazyComponent } from '../utils/lazyLoading';
// Re-export the utility function
export { createLazyComponent } from '../utils/lazyLoading';

export default LazyWrapper;
