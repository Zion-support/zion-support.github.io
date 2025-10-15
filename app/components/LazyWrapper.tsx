import React, { Suspense } from 'react';

interface LazyWrapperProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const DefaultFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-300 text-lg">Loading...</p>
    </div>
  </div>
);

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

// Re-export from utils
export { createLazyComponent } from '../utils/lazyLoading';

export default LazyWrapper;