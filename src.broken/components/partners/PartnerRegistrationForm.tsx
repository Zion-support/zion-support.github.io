import React from 'react';

interface PartnerRegistrationFormProps {
  className?: string;
}

const PartnerRegistrationForm: React.FC<PartnerRegistrationFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PartnerRegistrationForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PartnerRegistrationForm;