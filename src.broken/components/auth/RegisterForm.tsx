import React from 'react';

interface RegisterFormProps {
  className?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RegisterForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RegisterForm;