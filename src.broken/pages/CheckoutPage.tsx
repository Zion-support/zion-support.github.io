import React from 'react';

interface CheckoutPageProps {
  className?: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CheckoutPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CheckoutPage;