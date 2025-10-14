import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {
  return (
    <div className={`performancedashboard-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">PerformanceDashboard</h3>
          <p className="text-gray-600">This is the PerformanceDashboard component.</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceDashboard;