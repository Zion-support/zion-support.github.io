import React from 'react';

interface PerformanceOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ className = '', children }) => {
  return (
    <div className={`performanceoptimizer ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceOptimizer;