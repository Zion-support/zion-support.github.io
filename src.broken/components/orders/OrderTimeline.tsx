import React from 'react';

interface OrderTimelineProps {
  className?: string;
}

const OrderTimeline: React.FC<OrderTimelineProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OrderTimeline</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OrderTimeline;