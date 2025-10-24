'use client'
import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Performance Dashboard</h2>
      <p className="text-gray-600">This is a placeholder component for Performance Dashboard.</p>
    </div>
  );
};

export default PerformanceDashboard;
