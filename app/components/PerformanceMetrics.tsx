import React from 'react';

interface PerformanceMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMetrics({ className = '', children }: PerformanceMetricsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
