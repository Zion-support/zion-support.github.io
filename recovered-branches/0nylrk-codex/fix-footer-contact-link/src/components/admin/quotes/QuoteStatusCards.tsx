import React from 'react';

interface QuoteStatusCardsProps {
  className?: string;
}

const QuoteStatusCards: React.FC<QuoteStatusCardsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteStatusCards</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteStatusCards;