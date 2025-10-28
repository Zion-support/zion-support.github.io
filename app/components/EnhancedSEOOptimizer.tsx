'use client';

import React, { memo } from 'react';

interface EnhancedSEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-seo-optimizer ${className}`}>
      {children}
    </div>
  );
});

EnhancedSEOOptimizer.displayName = 'EnhancedSEOOptimizer';

export default EnhancedSEOOptimizer;