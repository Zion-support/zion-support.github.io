import React from 'react';

interface SummaryStepProps {
  className?: string;
}

const SummaryStep: React.FC<SummaryStepProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SummaryStep</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SummaryStep;