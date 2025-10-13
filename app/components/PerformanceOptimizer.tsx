import React from 'react';

interface PerformanceOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceOptimizer({ className = '', children }: PerformanceOptimizerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}