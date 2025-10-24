'use client'
import React from 'react';

interface PerformanceMetricsProps {
  className?: string;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
      <p className="text-gray-600">This is a placeholder component for Performance Metrics.</p>
    </div>
  );
};

export default PerformanceMetrics;
