'use client';

import React from 'react';

interface EnhancedSEOOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedSEOOptimizer: React.FC<EnhancedSEOOptimizerProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedSEOOptimizer;
