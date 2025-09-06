import React from 'react';

interface WalletPage.testProps {
  className?: string;
}

const WalletPage.test: React.FC<WalletPage.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WalletPage.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WalletPage.test;