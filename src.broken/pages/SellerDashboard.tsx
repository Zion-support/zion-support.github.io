import React from 'react';

interface SellerDashboardProps {
  className?: string;
}

const SellerDashboard: React.FC<SellerDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SellerDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SellerDashboard;