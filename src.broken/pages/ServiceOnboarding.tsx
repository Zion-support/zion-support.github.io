import React from 'react';

interface ServiceOnboardingProps {
  className?: string;
}

const ServiceOnboarding: React.FC<ServiceOnboardingProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ServiceOnboarding</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ServiceOnboarding;