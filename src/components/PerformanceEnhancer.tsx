import React from 'react';

interface PerformanceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`performanceenhancer ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceEnhancer;