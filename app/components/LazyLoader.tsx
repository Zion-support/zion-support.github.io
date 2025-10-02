import React, { Suspense, lazy } from 'react';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2 text-gray-600">Loading...</span>
  </div>
);

// Lazy load components
export const LazyUnifiedBanner = lazy(() => import('../components/UnifiedBannerSystem'));
export const LazyContentShowcase = lazy(() => import('../components/ContentShowcase'));
export const LazyFeaturedServiceCard = lazy(() => import('../components/FeaturedServiceCard'));
export const LazyNavigation = lazy(() => import('../components/Navigation'));

// Higher-order component for lazy loading
export const withLazyLoading = (Component, fallback = <LoadingSpinner />) => {
  return (props) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

// Lazy loading wrapper
export const LazyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

export default LazyWrapper;
