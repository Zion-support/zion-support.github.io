import React from 'react';

interface EnhancedSEOOptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedSEOOptimizer({ className = '', children }: EnhancedSEOOptimizerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}