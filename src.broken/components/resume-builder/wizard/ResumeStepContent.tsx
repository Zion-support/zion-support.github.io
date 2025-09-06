import React from 'react';

interface ResumeStepContentProps {
  className?: string;
}

const ResumeStepContent: React.FC<ResumeStepContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeStepContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeStepContent;