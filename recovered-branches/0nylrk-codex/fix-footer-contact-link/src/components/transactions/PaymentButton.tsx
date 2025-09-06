import React from 'react';

interface PaymentButtonProps {
  className?: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PaymentButton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PaymentButton;