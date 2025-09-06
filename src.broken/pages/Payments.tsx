import React from 'react';

interface PaymentsProps {
  className?: string;
}

const Payments: React.FC<PaymentsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Payments</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Payments;