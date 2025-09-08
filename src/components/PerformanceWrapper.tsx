import React, { memo, Suspense, ReactNode } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  enableLazyLoading?: boolean;
  lazyImport?: () => Promise<{ default: ComponentTypeg<div> }>;
  memoize?: boolean;
=======
>>>>>>> c7463fd0584e5d583266e6252c3232de9d3fa475
  className?: string;
}

/**
 * Performance wrapper component that provides basic performance optimizations
 */
const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  fallback = <div>Loading...</div>,
  className,
}) => {
  return (
    <div className={className}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
};

export default memo(PerformanceWrapper);