import React from 'react';

interface OrderSuccessProps {
  className?: string;
}

const OrderSuccess: React.FC<OrderSuccessProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OrderSuccess</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OrderSuccess;