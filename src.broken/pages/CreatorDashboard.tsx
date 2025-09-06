import React from 'react';

interface CreatorDashboardProps {
  className?: string;
}

const CreatorDashboard: React.FC<CreatorDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreatorDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreatorDashboard;