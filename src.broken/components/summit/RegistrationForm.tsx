import React from 'react';

interface RegistrationFormProps {
  className?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RegistrationForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RegistrationForm;