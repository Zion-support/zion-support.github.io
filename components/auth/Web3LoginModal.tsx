import React from 'react';

interface Web3LoginModalProps {
  className?: string;
}

const Web3LoginModal: React.FC<Web3LoginModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Web3LoginModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Web3LoginModal;