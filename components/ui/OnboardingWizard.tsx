import React from 'react';

interface OnboardingWizardProps {
  className?: string;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnboardingWizard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnboardingWizard;