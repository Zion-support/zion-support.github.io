import React from 'react';

interface PaymentMethodsProps {
  className?: string;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PaymentMethods</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PaymentMethods;