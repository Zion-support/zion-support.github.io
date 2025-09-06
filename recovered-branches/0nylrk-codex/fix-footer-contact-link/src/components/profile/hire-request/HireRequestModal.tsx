import React from 'react';

interface HireRequestModalProps {
  className?: string;
}

const HireRequestModal: React.FC<HireRequestModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HireRequestModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HireRequestModal;