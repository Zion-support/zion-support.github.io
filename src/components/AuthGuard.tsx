import React from 'react';

interface AuthGuardProps {
  className?: string;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthGuard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthGuard;