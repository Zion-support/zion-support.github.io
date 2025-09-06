import React from 'react';

interface CheckoutSuccessProps {
  className?: string;
}

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CheckoutSuccess</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CheckoutSuccess;