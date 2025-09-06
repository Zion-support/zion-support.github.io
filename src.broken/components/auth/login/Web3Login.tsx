import React from 'react';

interface Web3LoginProps {
  className?: string;
}

const Web3Login: React.FC<Web3LoginProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Web3Login</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Web3Login;