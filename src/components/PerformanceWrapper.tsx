import React, { memo, Suspense, ReactNode } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  enableLazyLoading?: boolean;
  lazyImport?: () => Promise<{ default: React.ComponentType<any> }>;
  memoize?: boolean;
  className?: string;
}

/**
 * Performance wrapper component that provides basic performance optimizations
 */
const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div>Loading...</div>,
  enableLazyLoading = false,
  lazyImport,
  memoize = false,
  className,
}) => {
  const MemoizedComponent = memoize ? memo(children as React.ComponentType<any>) : children;

  if (enableLazyLoading && lazyImport) {
    const LazyComponent = React.lazy(lazyImport);
    return (
      <Suspense fallback={fallback}>
        <LazyComponent />
      </Suspense>
    );
  }

  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {memoize ? MemoizedComponent : children}
      </Suspense>
    </div>
  );
};

PerformanceWrapper.displayName = 'PerformanceWrapper';

export default PerformanceWrapper;