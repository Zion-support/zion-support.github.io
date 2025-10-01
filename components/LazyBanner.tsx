import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyBannerProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
}

/**
 * LazyBanner component for code-splitting banner components
 * This helps reduce initial bundle size by loading banners on-demand
 */
const LazyBanner: React.FC<LazyBannerProps> = ({ importFn, fallback }) => {
  const LazyComponent = lazy(importFn);

  return (
    <Suspense
      fallback={
        fallback || (
          <div className="w-full h-64 bg-gradient-to-r from-gray-900/50 to-gray-800/50 animate-pulse rounded-2xl flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )
      }
    >
      <LazyComponent />
    </Suspense>
  );
};

export default LazyBanner;

// Helper function to create lazy-loaded banner components
export const createLazyBanner = (
  importFn: () => Promise<{ default: ComponentType<any> }>
) => {
  return () => <LazyBanner importFn={importFn} />;
};

// Example usage for future banner lazy loading:
// const LazyOctober2025Banner = createLazyBanner(() => 
//   import('./October2025BreakingContentBanner')
// );
