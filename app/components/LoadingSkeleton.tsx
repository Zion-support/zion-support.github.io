'use client';

import React, { memo } from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`loading-skeleton ${className}`}>
      {children}
    </div>
  );
});

LoadingSkeleton.displayName = 'LoadingSkeleton';

export default LoadingSkeleton;