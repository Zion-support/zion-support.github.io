import React from 'react';

interface SignupFormProps {
  className?: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SignupForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SignupForm;