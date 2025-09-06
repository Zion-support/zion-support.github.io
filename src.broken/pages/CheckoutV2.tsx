import React from 'react';

interface CheckoutV2Props {
  className?: string;
}

const CheckoutV2: React.FC<CheckoutV2Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CheckoutV2</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CheckoutV2;