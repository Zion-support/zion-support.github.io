import React from 'react';

interface ImageOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImageOptimizer({ className = '', children }: ImageOptimizerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}