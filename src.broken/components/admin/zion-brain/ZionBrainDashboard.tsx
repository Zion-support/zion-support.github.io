import React from 'react';

interface ZionBrainDashboardProps {
  className?: string;
}

const ZionBrainDashboard: React.FC<ZionBrainDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ZionBrainDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ZionBrainDashboard;