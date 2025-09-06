import React from 'react';

interface OrderConfirmationProps {
  className?: string;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OrderConfirmation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OrderConfirmation;