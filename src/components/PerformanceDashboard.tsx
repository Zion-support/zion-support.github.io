import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '' }) => {
  return (
    <div className={`performancedashboard ${className}`}>
      <h2>Performance Dashboard</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PerformanceDashboard;