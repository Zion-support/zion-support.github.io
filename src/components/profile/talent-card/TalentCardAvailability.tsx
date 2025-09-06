import React from 'react';

interface TalentCardAvailabilityProps {
  className?: string;
}

const TalentCardAvailability: React.FC<TalentCardAvailabilityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCardAvailability</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCardAvailability;