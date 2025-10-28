'use client';

import React, { memo } from 'react';

interface OptimizedLoadingProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`optimized-loading ${className}`}>
      {children}
    </div>
  );
});

OptimizedLoading.displayName = 'OptimizedLoading';

export default OptimizedLoading;