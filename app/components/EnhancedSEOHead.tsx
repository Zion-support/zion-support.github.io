'use client';

import React, { memo } from 'react';

interface EnhancedSEOHeadProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedSEOHead: React.FC<EnhancedSEOHeadProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-seo-head ${className}`}>
      {children}
    </div>
  );
});

EnhancedSEOHead.displayName = 'EnhancedSEOHead';

export default EnhancedSEOHead;