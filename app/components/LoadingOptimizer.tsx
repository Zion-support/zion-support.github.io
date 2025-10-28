'use client';

import React, { memo } from 'react';

interface LoadingOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`loading-optimizer ${className}`}>
      {children}
    </div>
  );
});

LoadingOptimizer.displayName = 'LoadingOptimizer';

export default LoadingOptimizer;