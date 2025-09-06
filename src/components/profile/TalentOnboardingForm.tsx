import React from 'react';

interface TalentOnboardingFormProps {
  className?: string;
}

const TalentOnboardingForm: React.FC<TalentOnboardingFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentOnboardingForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentOnboardingForm;