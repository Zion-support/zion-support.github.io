'use client';
import React from 'react';

interface SEOOptimizerProps {
  children?: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return (
    <div className="seo-optimizer">
      {children}
    </div>
  );
};

export default SEOOptimizer;