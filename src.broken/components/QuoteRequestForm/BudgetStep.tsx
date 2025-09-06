import React from 'react';

interface BudgetStepProps {
  className?: string;
}

const BudgetStep: React.FC<BudgetStepProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BudgetStep</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BudgetStep;