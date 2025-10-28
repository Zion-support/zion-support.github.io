'use client';

import React from 'react';

interface SEOOptimizationProps {
  className?: string;
  children?: React.ReactNode;
}

const SEOOptimization: React.FC<SEOOptimizationProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`seooptimization-component ${className}`}>
      {children}
    </div>
  );
};

SEOOptimization.displayName = 'SEOOptimization';

export default SEOOptimization;
