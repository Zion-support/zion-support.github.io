import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PerformanceDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PerformanceDashboard;