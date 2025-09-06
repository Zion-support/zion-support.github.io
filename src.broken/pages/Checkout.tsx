import React from 'react';

interface CheckoutProps {
  className?: string;
}

const Checkout: React.FC<CheckoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Checkout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Checkout;