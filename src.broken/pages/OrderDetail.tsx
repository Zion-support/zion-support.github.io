import React from 'react';

interface OrderDetailProps {
  className?: string;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OrderDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OrderDetail;