import React from 'react';

interface AutoFillModalProps {
  className?: string;
}

const AutoFillModal: React.FC<AutoFillModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AutoFillModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AutoFillModal;