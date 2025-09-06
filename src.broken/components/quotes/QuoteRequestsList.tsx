import React from 'react';

interface QuoteRequestsListProps {
  className?: string;
}

const QuoteRequestsList: React.FC<QuoteRequestsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuoteRequestsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuoteRequestsList;