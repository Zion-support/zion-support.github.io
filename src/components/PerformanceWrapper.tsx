import React, { memo, Suspense, ReactNode } from 'react';

interface PerformanceWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
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