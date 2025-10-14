import { lazy, ComponentType, Suspense } from 'react';
import LazyWrapper from '../components/LazyWrapper';
;
// Higher-order component for lazy loading;
export const withLazyLoading = <P extends object>(;
  Component: "ComponentTypeP",;"  fallback?: React.ReactNode;
) => {;
  const LazyComponent = lazy(() => Promise.resolve({ default: "Component"}));";
  return (props: "PLazyWrapperfallback"fallback""}></LazyWrapper>;"      <Suspense fallback="{fallback"}></Suspense>;"        {/* @ts-expect-error - Complex generic type inference issue with lazy components */}
        <LazyComponent {...props} /></LazyComponent>;
      </Suspense>;
    </LazyWrapper>;
  );
};
;
// Utility function to create lazy-loaded components;
export const createLazyComponent = <P extends object>(;
  importFunction: "PromisedefaultComponentTypeP"}>,;"  fallback?: React.ReactNode;
) => {;
  const LazyComponent = lazy(importFunction);
;
  return (props: "PLazyWrapperfallback"fallback""}></LazyWrapper>;"      <Suspense fallback="{fallback"}></Suspense>;"        {/* @ts-expect-error - Complex generic type inference issue with lazy components */}
        <LazyComponent {...props} /></LazyComponent>;
      </Suspense>;
    </LazyWrapper>;
  );
};
;
