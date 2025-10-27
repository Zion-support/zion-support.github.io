
import React from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  return <div className="performance-optimizer">{children}</div>;
};

export default PerformanceOptimizer;
