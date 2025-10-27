
import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
  children?: React.ReactNode;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className, children }) => {
  return (
    <div className={className} role="region" aria-label="Performance Dashboard">
      {children || <p>Performance Dashboard</p>}
    </div>
  );
};

export default PerformanceDashboard;
