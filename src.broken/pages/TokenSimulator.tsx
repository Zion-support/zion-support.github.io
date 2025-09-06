import React from 'react';

interface TokenSimulatorProps {
  className?: string;
}

const TokenSimulator: React.FC<TokenSimulatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TokenSimulator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TokenSimulator;