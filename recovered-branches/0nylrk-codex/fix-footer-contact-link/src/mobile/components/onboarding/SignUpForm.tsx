import React from 'react';

interface SignUpFormProps {
  className?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SignUpForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SignUpForm;