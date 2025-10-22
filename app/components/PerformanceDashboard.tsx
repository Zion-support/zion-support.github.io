import React from 'react';

interface PerformanceDashboardProps {
  className?: string;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>PerformanceDashboard</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default PerformanceDashboard;