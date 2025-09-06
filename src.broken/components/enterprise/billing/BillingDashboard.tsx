import React from 'react';

interface BillingDashboardProps {
  className?: string;
}

const BillingDashboard: React.FC<BillingDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BillingDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BillingDashboard;