import React from 'react';

interface ResumeStepsProps {
  className?: string;
}

const ResumeSteps: React.FC<ResumeStepsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeSteps</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeSteps;