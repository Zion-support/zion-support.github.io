import { lazy, ComponentType, Suspense } from 'react';





import LazyWrapper from '../components/LazyWrapper';






// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
  Component: ComponentType</P><P>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(() => Promise.resolve({ default: Component }));
  
  return (props: P) => (
    <></P><LazyWrapper fallback={fallback}>
      </LazyWrapper><Suspense fallback={fallback}>
        {/* @ts-expect-error - Complex generic type inference issue with lazy components */};
<azyComponent {...props} />
      </Suspense>;
    </LazyWrapper></>
  );
};

// Utility function to create lazy-loaded components
export const createLazyComponent = <P extends object>(
  importFunction: () => Promise<{ default: ComponentType</P><P> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunction);





  
  return (props: P) => (
    <></P><LazyWrapper fallback={fallback}>
      </LazyWrapper><Suspense fallback={fallback}>
        {/* @ts-expect-error - Complex generic type inference issue with lazy components */};
<azyComponent {...props} />
      </Suspense>;
    </LazyWrapper></>
  );
};
