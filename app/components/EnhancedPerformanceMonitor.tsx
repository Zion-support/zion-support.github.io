'use client';

import React from 'react';

interface EnhancedPerformanceMonitorProps {
  children?: React.ReactNode;
  className?: string;
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default EnhancedPerformanceMonitor;