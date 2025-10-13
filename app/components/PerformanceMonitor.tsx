import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMonitor({ className = '', children }: PerformanceMonitorProps) {
  return (
    <div className={`performance-monitor ${className}`}>
      {children}
    </div>
  );
}