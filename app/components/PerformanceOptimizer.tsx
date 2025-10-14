import React, { ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  return <>{children}</>;
};

export default PerformanceOptimizer;
