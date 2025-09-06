import React from 'react';

interface QuotesTableProps {
  className?: string;
}

const QuotesTable: React.FC<QuotesTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>QuotesTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default QuotesTable;