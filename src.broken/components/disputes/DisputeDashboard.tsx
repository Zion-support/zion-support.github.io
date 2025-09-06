import React from 'react';

interface DisputeDashboardProps {
  className?: string;
}

const DisputeDashboard: React.FC<DisputeDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DisputeDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DisputeDashboard;