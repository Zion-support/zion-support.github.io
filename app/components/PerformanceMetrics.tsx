import React from 'react';

interface PerformanceMetricsProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ className = '', children }) => {
  return (
    <div className={`performancemetrics ${className}`}>
      {children}
    </div>
  );
};

export default PerformanceMetrics;