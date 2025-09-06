import React from 'react';

interface MobileOnboardingProps {
  className?: string;
}

const MobileOnboarding: React.FC<MobileOnboardingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileOnboarding</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileOnboarding;