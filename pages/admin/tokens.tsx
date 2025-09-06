import React from 'react';

interface TokensProps {
  className?: string;
}

const Tokens: React.FC<TokensProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tokens</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tokens;