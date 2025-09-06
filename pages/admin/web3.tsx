import React from 'react';

interface Web3Props {
  className?: string;
}

const Web3: React.FC<Web3Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Web3</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Web3;