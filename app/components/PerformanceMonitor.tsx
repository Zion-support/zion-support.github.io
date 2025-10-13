import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMonitor({ className = '', children, ...props }: PerformanceMonitorProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
