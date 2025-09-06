import React from 'react';

interface ClientOnboardingStepsProps {
  className?: string;
}

const ClientOnboardingSteps: React.FC<ClientOnboardingStepsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ClientOnboardingSteps</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ClientOnboardingSteps;