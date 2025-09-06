import React from 'react';

interface QuoteManagerProps {
  className?: string;
}

const QuoteManager: React.FC<QuoteManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteManager;