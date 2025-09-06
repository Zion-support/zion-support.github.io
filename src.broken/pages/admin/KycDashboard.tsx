import React from 'react';

interface KycDashboardProps {
  className?: string;
}

const KycDashboard: React.FC<KycDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>KycDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default KycDashboard;