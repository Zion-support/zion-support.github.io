import React from 'react';

interface LoginErrorFallbackProps {
  className?: string;
}

const LoginErrorFallback: React.FC<LoginErrorFallbackProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoginErrorFallback</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoginErrorFallback;