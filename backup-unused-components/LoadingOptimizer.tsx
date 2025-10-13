import React from 'react';

interface LoadingOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingOptimizer({ className = '', children }: LoadingOptimizerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}