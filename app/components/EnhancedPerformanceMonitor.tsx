'use client';

import React, { memo } from 'react';

interface EnhancedPerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`enhanced-performance-monitor ${className}`}>
      {children}
    </div>
  );
});

EnhancedPerformanceMonitor.displayName = 'EnhancedPerformanceMonitor';

export default EnhancedPerformanceMonitor;