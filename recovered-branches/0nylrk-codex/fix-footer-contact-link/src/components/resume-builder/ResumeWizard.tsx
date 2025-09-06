import React from 'react';

interface ResumeWizardProps {
  className?: string;
}

const ResumeWizard: React.FC<ResumeWizardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResumeWizard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResumeWizard;