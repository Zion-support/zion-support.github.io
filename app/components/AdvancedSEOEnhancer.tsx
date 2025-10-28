'use client';

import React, { memo } from 'react';

interface AdvancedSEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AdvancedSEOEnhancer: React.FC<AdvancedSEOEnhancerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`advanced-seo-enhancer ${className}`}>
      {children}
    </div>
  );
});

AdvancedSEOEnhancer.displayName = 'AdvancedSEOEnhancer';

export default AdvancedSEOEnhancer;