import React from 'react';

interface QuoteRequestCardProps {
  className?: string;
}

const QuoteRequestCard: React.FC<QuoteRequestCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteRequestCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteRequestCard;