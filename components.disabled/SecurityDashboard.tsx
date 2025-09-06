import React from 'react';

interface SecurityDashboardProps {
  className?: string;
}

const SecurityDashboard: React.FC<SecurityDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SecurityDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SecurityDashboard;