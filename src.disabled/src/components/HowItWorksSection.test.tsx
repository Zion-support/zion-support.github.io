import React from 'react';

interface HowItWorksSection.testProps {
  className?: string;
}

const HowItWorksSection.test: React.FC<HowItWorksSection.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HowItWorksSection.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HowItWorksSection.test;