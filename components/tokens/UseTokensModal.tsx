import React from 'react';

interface UseTokensModalProps {
  className?: string;
}

const UseTokensModal: React.FC<UseTokensModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseTokensModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseTokensModal;