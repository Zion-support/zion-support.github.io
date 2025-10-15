import React from 'react';

interface LoadingoptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Loadingoptimizer({ className = '', children }: LoadingoptimizerProps) {
  return (
    <div className={`LoadingOptimizer-component ${className}`}>
      {children}
    </div>
  );
}