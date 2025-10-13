import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

export default function PerformanceMonitor({ className = '' }: PerformanceMonitorProps) {
  return (
    <div className={`performance-monitor ${className}`}>
      <h3>Performance Monitor</h3>
      <p>Performance monitoring component</p>
    </div>
  );
}