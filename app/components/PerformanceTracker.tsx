import React from 'react';

interface PerformanceTrackerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceTracker({ className = '', children }: PerformanceTrackerProps) {
  return (
    <div className={`performancetracker ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">PerformanceTracker</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}