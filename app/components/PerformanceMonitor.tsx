import React from 'react';

interface PerformanceMonitorProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceMonitor({ className = '', children }: PerformanceMonitorProps) {
  return (
    <div className={`performancemonitor ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">PerformanceMonitor</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}