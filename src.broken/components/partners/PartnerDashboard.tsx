import React from 'react';

interface PartnerDashboardProps {
  className?: string;
}

const PartnerDashboard: React.FC<PartnerDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PartnerDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PartnerDashboard;