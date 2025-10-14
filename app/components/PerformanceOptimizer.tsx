import React from "react";

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  return <>{children}</>;
};

export default PerformanceOptimizer;