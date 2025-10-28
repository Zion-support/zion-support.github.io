'use client';

import React, { memo } from 'react';

interface SEOEnhancementsProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancements: React.FC<SEOEnhancementsProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`seo-enhancements ${className}`}>
      {children}
    </div>
  );
});

SEOEnhancements.displayName = 'SEOEnhancements';

export default SEOEnhancements;