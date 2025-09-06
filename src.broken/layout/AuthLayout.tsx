import React from 'react';

interface AuthLayoutProps {
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthLayout;