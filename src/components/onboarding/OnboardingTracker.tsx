import React from 'react';

interface OnboardingTrackerProps {
  className?: string;
}

const OnboardingTracker: React.FC<OnboardingTrackerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>OnboardingTracker</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default OnboardingTracker;