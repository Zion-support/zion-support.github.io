import React from 'react';

interface TransactionHistoryProps {
  className?: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TransactionHistory</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TransactionHistory;