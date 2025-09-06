import React from 'react';

interface AuthConfigurationErrorProps {
  className?: string;
}

const AuthConfigurationError: React.FC<AuthConfigurationErrorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AuthConfigurationError</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AuthConfigurationError;