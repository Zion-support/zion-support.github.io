'use client';

import React from 'react';

interface SEOEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`seo-enhancer ${className}`}>
      {children || <p>SEOEnhancer component</p>}
    </div>
  );
};

export default SEOEnhancer;
