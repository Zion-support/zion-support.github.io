import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>PerformanceDashboard</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

export default PerformanceDashboard;
