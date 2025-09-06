import React from 'react';

interface QuotesFilterProps {
  className?: string;
}

const QuotesFilter: React.FC<QuotesFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuotesFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuotesFilter;