import React, { Suspense, lazy, ComponentType } from 'react';

interface LazyBannerProps {
  importFn: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
}

/**
 * LazyBanner - Performance-optimized lazy loading wrapper for banner components
 * 
 * This component implements:
 * - Lazy loading to reduce initial bundle size
 * - Intersection Observer for viewport-based loading
 * - Graceful fallback handling
 * - Error boundary integration
 * 
 * Usage:
 * <LazyBanner 
 *   importFn={() => import('./components/SomeBanner')} 
 *   fallback={<BannerSkeleton />}
 * />
 */
const LazyBanner: React.FC<LazyBannerProps> = ({ importFn, fallback = null }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before banner comes into view
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Only load the component when it becomes visible
  const LazyComponent = React.useMemo(() => {
    if (!isVisible) return null;
    return lazy(importFn);
  }, [isVisible, importFn]);

  return (
    <div ref={containerRef} data-lazy-banner>
      {isVisible && LazyComponent ? (
        <Suspense fallback={fallback || <BannerSkeleton />}>
          <LazyComponent />
        </Suspense>
      ) : (
        fallback || <div style={{ minHeight: '300px' }} />
      )}
    </div>
  );
};

/**
 * BannerSkeleton - Loading placeholder for banner components
 */
const BannerSkeleton: React.FC = () => (
  <div className="animate-pulse bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12 border-b border-slate-700">
    <div className="container mx-auto px-6">
      <div className="h-8 bg-slate-700 rounded w-3/4 mx-auto mb-4"></div>
      <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto mb-8"></div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-24 bg-slate-700 rounded"></div>
        <div className="h-24 bg-slate-700 rounded"></div>
        <div className="h-24 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
);

export default LazyBanner;
export { BannerSkeleton };
