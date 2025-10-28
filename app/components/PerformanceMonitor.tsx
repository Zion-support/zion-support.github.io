'use client';

import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  className = '',
  children 
}) => {
  return (
    <div className={`performancemonitor-component ${className}`}>
      {children}
    </div>
  );
};

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;
