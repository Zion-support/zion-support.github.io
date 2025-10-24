'use client';
import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>PerformanceMonitor</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default PerformanceMonitor;
