import React from 'react';

interface InvoiceHistoryProps {
  className?: string;
}

const InvoiceHistory: React.FC<InvoiceHistoryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InvoiceHistory</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InvoiceHistory;