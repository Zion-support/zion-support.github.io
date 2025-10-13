import React from 'react';

interface PerformanceMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMetrics({ className = '', children }: PerformanceMetricsProps) {
  return (
    <div className={`performancemetrics ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">PerformanceMetrics</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}