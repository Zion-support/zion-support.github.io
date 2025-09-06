import React from 'react';

interface NationDashboardProps {
  className?: string;
}

const NationDashboard: React.FC<NationDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NationDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NationDashboard;