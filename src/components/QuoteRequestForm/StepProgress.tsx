import React from 'react';

interface StepProgressProps {
  className?: string;
}

const StepProgress: React.FC<StepProgressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StepProgress</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StepProgress;