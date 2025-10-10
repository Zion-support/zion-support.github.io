'use client';

import React from 'react';

interface PerformanceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`performanceenhancer-component ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceEnhancer;
