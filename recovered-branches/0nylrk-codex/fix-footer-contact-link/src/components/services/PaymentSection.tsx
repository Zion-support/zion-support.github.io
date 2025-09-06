import React from 'react';

interface PaymentSectionProps {
  className?: string;
}

const PaymentSection: React.FC<PaymentSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PaymentSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PaymentSection;