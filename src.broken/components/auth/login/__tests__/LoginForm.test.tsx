import React from 'react';

interface LoginForm.testProps {
  className?: string;
}

const LoginForm.test: React.FC<LoginForm.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoginForm.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoginForm.test;