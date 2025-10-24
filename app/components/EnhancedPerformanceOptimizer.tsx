'use client';

import React from 'react';

interface EnhancedPerformanceOptimizerProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedPerformanceOptimizer: React.FC<EnhancedPerformanceOptimizerProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedPerformanceOptimizer;
