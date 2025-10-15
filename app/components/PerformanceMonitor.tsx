import React from 'react';

interface PerformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Performancemonitor({ className = '', children }: PerformancemonitorProps) {
  return (
    <div className={`PerformanceMonitor-component ${className}`}>
      {children}
    </div>
  );
}