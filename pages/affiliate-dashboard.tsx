import React from 'react';

interface AffiliateDashboardProps {
  className?: string;
}

const AffiliateDashboard: React.FC<AffiliateDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AffiliateDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AffiliateDashboard;