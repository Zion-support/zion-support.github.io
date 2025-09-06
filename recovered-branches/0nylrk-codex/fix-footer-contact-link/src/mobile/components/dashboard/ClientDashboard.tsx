import React from 'react';

interface ClientDashboardProps {
  className?: string;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ClientDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ClientDashboard;