'use client';

import React, { memo } from 'react';

interface MobileOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`mobile-optimizer ${className}`}>
      {children}
    </div>
  );
});

MobileOptimizer.displayName = 'MobileOptimizer';

export default MobileOptimizer;