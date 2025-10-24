'use client'
import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Performance Monitor</h2>
      <p className="text-gray-600">This is a placeholder component for Performance Monitor.</p>
    </div>
  );
};

export default PerformanceMonitor;
