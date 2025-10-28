'use client';

import React, { memo } from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`seo-enhancer ${className}`}>
      {children}
    </div>
  );
});

SEOEnhancer.displayName = 'SEOEnhancer';

export default SEOEnhancer;