import React from 'react';

interface PaymentSummaryProps {
  className?: string;
}

const PaymentSummary: React.FC<PaymentSummaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PaymentSummary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PaymentSummary;