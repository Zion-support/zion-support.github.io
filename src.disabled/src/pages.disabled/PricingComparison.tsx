import React from 'react';

interface PricingComparisonProps {
  className?: string;
}

const PricingComparison: React.FC<PricingComparisonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PricingComparison</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PricingComparison;