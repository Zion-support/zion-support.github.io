import React from 'react';

interface CheckoutShippingOptionsProps {
  className?: string;
}

const CheckoutShippingOptions: React.FC<CheckoutShippingOptionsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CheckoutShippingOptions</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CheckoutShippingOptions;