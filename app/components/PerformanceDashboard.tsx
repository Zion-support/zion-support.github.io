import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PerformanceDashboard({ className = '', children }: PerformanceDashboardProps) {
  return (
    <div className={`performancedashboard ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">PerformanceDashboard</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}