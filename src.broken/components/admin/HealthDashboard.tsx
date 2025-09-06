import React from 'react';

interface HealthDashboardProps {
  className?: string;
}

const HealthDashboard: React.FC<HealthDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HealthDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HealthDashboard;