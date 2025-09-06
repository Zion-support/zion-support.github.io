import React from 'react';

interface WalletDashboardProps {
  className?: string;
}

const WalletDashboard: React.FC<WalletDashboardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WalletDashboard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WalletDashboard;