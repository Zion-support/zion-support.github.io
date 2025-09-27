import React from 'react';

interface PricingCalculatorProps {
  plan?: 'basic' | 'standard' | 'premium';
  className?: string;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  plan = 'standard',
  className = ''
}) => {
  const calculatePrice = (plan: string) => {
    switch (plan) {
      case 'basic':
        return 29;
      case 'standard':
        return 59;
      case 'premium':
        return 99;
      default:
        return 59;
    }
  };

  return (
    <div className={`pricing-calculator ${className}`}>
      <h3>Pricing Calculator</h3>
      <p>Plan: {plan}</p>
      <p>Price: ${calculatePrice(plan)}/month</p>
    </div>
  );
};

export default PricingCalculator;