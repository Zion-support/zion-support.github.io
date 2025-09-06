import React from 'react';

interface OnsiteQuoteModalProps {
  className?: string;
}

const OnsiteQuoteModal: React.FC<OnsiteQuoteModalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnsiteQuoteModal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnsiteQuoteModal;