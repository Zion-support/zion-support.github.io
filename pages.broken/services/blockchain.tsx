import React from 'react';

interface BlockchainProps {
  className?: string;
}

const Blockchain: React.FC<BlockchainProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Blockchain</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Blockchain;