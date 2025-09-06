import React from 'react';

interface TokenManagerProps {
  className?: string;
}

const TokenManager: React.FC<TokenManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TokenManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TokenManager;