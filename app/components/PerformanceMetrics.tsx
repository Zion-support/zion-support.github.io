import React from 'react';

interface PerformanceMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ className = '', children }) => {
  return (
    <div className={`performancemetrics-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">PerformanceMetrics</h3>
          <p className="text-gray-600">This is the PerformanceMetrics component.</p>
        </div>
      )}
    </div>
  );
};

export default PerformanceMetrics;