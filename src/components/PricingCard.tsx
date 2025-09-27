import React from 'react';

interface PricingCardProps {
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  className = ''
}) => {
  return (
    <div className={`pricingcard ${className}`}>
      <h2>PricingCard</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default PricingCard;
