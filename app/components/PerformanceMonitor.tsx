'use client';
import React from 'react';

interface PerformanceMonitorProps {
  children?: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  return (
    <div className="performance-monitor">
      {children}
    </div>
  );
};

export default PerformanceMonitor;