import React, { lazy, Suspense, ComponentType } from 'react';

const LazyUtils = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Lazy Utils</h2>
        <p className="text-gray-300 text-lg">This component is under construction.</p>
      </div>
    </div>
  );
};

export default LazyUtils;

// Utility function to create lazy-loaded components
export const createLazyComponent = (
  importFunction: () => Promise<{ default: ComponentType<any> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFunction);

  return (props: any) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
