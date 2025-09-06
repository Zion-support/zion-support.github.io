import React from 'react';

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Dashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Dashboard;