import React from 'react';

interface AuthProviderProps {
  className?: string;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthProvider;