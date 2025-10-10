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
    <div className={`seoenhancer-component ${className}`}>
      {children}
    </div>
  );
};

export default SEOEnhancer;
