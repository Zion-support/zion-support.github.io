"use client";
import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        PerformanceMonitor
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default PerformanceMonitor;