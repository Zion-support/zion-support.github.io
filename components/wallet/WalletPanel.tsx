import React from 'react';

interface WalletPanelProps {
  className?: string;
}

const WalletPanel: React.FC<WalletPanelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WalletPanel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WalletPanel;