import React from 'react';

interface OrderConfirmationPageProps {
  className?: string;
}

const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OrderConfirmationPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OrderConfirmationPage;