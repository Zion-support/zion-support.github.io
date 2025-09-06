import React from 'react';

interface Supply-chainProps {
  className?: string;
}

const Supply-chain: React.FC<Supply-chainProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Supply-chain</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Supply-chain;