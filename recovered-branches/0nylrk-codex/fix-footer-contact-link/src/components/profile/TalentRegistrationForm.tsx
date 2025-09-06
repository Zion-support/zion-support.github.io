import React from 'react';

interface TalentRegistrationFormProps {
  className?: string;
}

const TalentRegistrationForm: React.FC<TalentRegistrationFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentRegistrationForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentRegistrationForm;