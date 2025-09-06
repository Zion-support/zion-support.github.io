import React from 'react';

interface TalentOnboardingProps {
  className?: string;
}

const TalentOnboarding: React.FC<TalentOnboardingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentOnboarding</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentOnboarding;