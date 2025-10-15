import React from 'react';

interface PerformancemetricsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Performancemetrics({ className = '', children }: PerformancemetricsProps) {
  return (
    <div className={`PerformanceMetrics-component ${className}`}>
      {children}
    </div>
  );
}