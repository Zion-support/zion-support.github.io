import React from 'react';

interface TokenomicsProps {
  className?: string;
}

const Tokenomics: React.FC<TokenomicsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tokenomics</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tokenomics;