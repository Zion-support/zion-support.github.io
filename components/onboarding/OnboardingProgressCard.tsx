import React from 'react';

interface OnboardingProgressCardProps {
  className?: string;
}

const OnboardingProgressCard: React.FC<OnboardingProgressCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnboardingProgressCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnboardingProgressCard;