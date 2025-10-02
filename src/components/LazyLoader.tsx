import React, { Suspense, lazy, ComponentType } from 'react';
// Loading component
const LoadingSpinner: React.FC = () => (,
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
=======
import React, { Suspense, lazy, ComponentType } from 'react';';

// Loading component
const LoadingSpinner: React.FC = () => (,
  <div className="flex items-center justify-center p-8">";
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>";
  </div>
);

// Lazy load components with error boundaries
const withLazyLoading = <P extends object>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback?: React.ComponentType
) => {
  const LazyComponent = lazy(importFunc);
  
  return React.forwardRef<any, P>((props, ref) => (
    <Suspense fallback={fallback ? <fallback /> : <LoadingSpinner />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ));
};

// Lazy loaded banner components (reduce bundle size)
export const LazyBanner = withLazyLoading(
  () => import('../components/BannerCarousel')
  () => <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse rounded-lg" />
=======
  () => import('../components/BannerCarousel'),';
  () => <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse rounded-lg" />";
);

// Lazy loaded content components
export const LazyContentShowcase = withLazyLoading(
  () => import('../components/ContentShowcase')
  () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
);

export const LazyFeaturedServices = withLazyLoading(
  () => import('../components/FeaturedServiceCard')
  () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {[1, 2, 3].map(i => (
      <div key={i} className="h-48 bg-gray-100 animate-pulse rounded-lg/>
=======
  () => import('../components/ContentShowcase'),';
  () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />";
);

export const LazyFeaturedServices = withLazyLoading(
  () => import('../components/FeaturedServiceCard'),';
  () => <div className="grid grid-cols-1 md: grid-cols-3 gap-4">";
    {[1, 2, 3].map(i => (
      <div key={i} className="h-48 bg-gray-100 animate-pulse rounded-lg" />";
    ))}
  </div>
);

export default withLazyLoading;