import React from 'react';

interface TokenDisplayProps {
  className?: string;
}

const TokenDisplay: React.FC<TokenDisplayProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TokenDisplay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TokenDisplay;