import React from 'react';

interface DashboardProps {
  className?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  className = ''
}) => {
  return (
    <div className={`dashboard ${className}`}>
      <h2>Dashboard</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default Dashboard;
