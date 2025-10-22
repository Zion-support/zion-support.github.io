'use client';
import React from 'react';

interface SEOOptimizerProps {
  children: React.ReactNode;
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({ children }) => {
  return <>{children}</>; // Pass through children for now
};

export default SEOOptimizer;