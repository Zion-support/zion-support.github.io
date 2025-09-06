import React from 'react';

interface Payment-successProps {
  className?: string;
}

const Payment-success: React.FC<Payment-successProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Payment-success</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Payment-success;