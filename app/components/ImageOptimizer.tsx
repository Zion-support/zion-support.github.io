import React from 'react';

interface ImageoptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Imageoptimizer({ className = '', children }: ImageoptimizerProps) {
  return (
    <div className={`ImageOptimizer-component ${className}`}>
      {children}
    </div>
  );
}