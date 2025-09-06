import React from 'react';

interface HowItWorksSectionProps {
  className?: string;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HowItWorksSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HowItWorksSection;