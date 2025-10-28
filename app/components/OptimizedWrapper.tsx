'use client';

import React, { memo } from 'react';

interface OptimizedWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const OptimizedWrapper: React.FC<OptimizedWrapperProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`optimized-wrapper ${className}`}>
      {children}
    </div>
  );
});

OptimizedWrapper.displayName = 'OptimizedWrapper';

export default OptimizedWrapper;