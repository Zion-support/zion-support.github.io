import React from 'react';

interface PerformanceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceEnhancer({ className = '', children }: PerformanceEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}