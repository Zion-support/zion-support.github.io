import React from 'react';

interface BenefitsSectionProps {
  className?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BenefitsSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BenefitsSection;