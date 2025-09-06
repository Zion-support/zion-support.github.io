import React from 'react';

interface MetricsDashboardProps {
  className?: string;
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MetricsDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MetricsDashboard;