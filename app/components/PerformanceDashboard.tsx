import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '', children }) => {
  return (
<div className={`performancedashboard-component ${className}`}>
      {children}
    </div>
  );
};

PerformanceDashboard.displayName = 'PerformanceDashboard';export default PerformanceDashboard;
