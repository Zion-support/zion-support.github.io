import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMonitor({ className = '', children }: PerformanceMonitorProps) {
  return (
    <div className={`performance-monitor ${className}`}>
      <h3>Performance Monitor</h3>
      <p>Performance monitoring component</p>
      {children}
    </div>
  );
}