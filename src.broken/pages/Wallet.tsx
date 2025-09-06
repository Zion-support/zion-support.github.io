import React from 'react';

interface WalletProps {
  className?: string;
}

const Wallet: React.FC<WalletProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Wallet</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Wallet;