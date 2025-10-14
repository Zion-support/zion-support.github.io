import React from 'react';

const lazyUtils = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">lazy Utils</h2>
        <p className="text-gray-300 text-lg">This component is under construction.</p>
      </div>
    </div>
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
}
