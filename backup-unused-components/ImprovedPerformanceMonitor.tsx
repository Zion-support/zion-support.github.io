import React from 'react';

interface ImprovedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedPerformanceMonitor({ className = '', children }: ImprovedPerformanceMonitorProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}