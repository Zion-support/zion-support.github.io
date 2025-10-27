import React from 'react';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedPerformanceMonitor({ 
  className = '', 
  children 
}: EnhancedPerformanceMonitorProps) {
  return (
    <div className={'enhancedperformancemonitor ' + className}>
      {children || <p>EnhancedPerformanceMonitor component</p>}
    </div>
  );
}
