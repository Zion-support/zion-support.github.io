import React from 'react';

interface QuoteDetailsProps {
  className?: string;
}

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteDetails</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteDetails;