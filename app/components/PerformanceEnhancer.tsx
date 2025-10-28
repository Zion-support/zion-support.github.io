'use client';

import React, { memo } from 'react';

interface PerformanceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`performance-enhancer ${className}`}>
      {children}
    </div>
  );
});

PerformanceEnhancer.displayName = 'PerformanceEnhancer';

export default PerformanceEnhancer;