import React from 'react';

interface MarketPricingProps {
  className?: string;
}

const MarketPricing: React.FC<MarketPricingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MarketPricing</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MarketPricing;