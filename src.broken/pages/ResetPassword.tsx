import React from 'react';

interface ResetPasswordProps {
  className?: string;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResetPassword</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResetPassword;