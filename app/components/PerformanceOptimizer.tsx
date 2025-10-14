import React, { ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  return (
    <div className="performanceoptimizer">
      {children}
    </div>
  );
}