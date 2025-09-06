import React from 'react';

interface Pricing-comparisonProps {
  className?: string;
}

const Pricing-comparison: React.FC<Pricing-comparisonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Pricing-comparison</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Pricing-comparison;