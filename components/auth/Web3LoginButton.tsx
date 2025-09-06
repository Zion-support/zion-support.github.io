import React from 'react';

interface Web3LoginButtonProps {
  className?: string;
}

const Web3LoginButton: React.FC<Web3LoginButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Web3LoginButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Web3LoginButton;