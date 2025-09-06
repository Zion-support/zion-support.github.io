import React from 'react';

interface Market-pricingProps {
  className?: string;
}

const Market-pricing: React.FC<Market-pricingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Market-pricing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Market-pricing;