import React from 'react';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoginForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoginForm;