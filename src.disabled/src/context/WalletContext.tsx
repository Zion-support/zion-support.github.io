import React from 'react';

interface WalletContextProps {
  className?: string;
}

const WalletContext: React.FC<WalletContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WalletContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WalletContext;