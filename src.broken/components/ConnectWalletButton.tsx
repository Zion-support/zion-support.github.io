import React from 'react';

interface ConnectWalletButtonProps {
  className?: string;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ConnectWalletButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ConnectWalletButton;