import React from 'react';

interface BenefitsSection.testProps {
  className?: string;
}

const BenefitsSection.test: React.FC<BenefitsSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BenefitsSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BenefitsSection.test;