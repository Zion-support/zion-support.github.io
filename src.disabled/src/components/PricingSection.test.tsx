import React from 'react';

interface PricingSection.testProps {
  className?: string;
}

const PricingSection.test: React.FC<PricingSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PricingSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PricingSection.test;