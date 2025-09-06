import React from 'react';

interface ForgotPasswordProps {
  className?: string;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ForgotPassword</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ForgotPassword;