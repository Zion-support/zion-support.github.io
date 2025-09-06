import React from 'react';

interface TalentOnboardingStepsProps {
  className?: string;
}

const TalentOnboardingSteps: React.FC<TalentOnboardingStepsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentOnboardingSteps</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentOnboardingSteps;