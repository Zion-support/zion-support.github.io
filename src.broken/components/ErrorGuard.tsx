import React from 'react';

interface ErrorGuardProps {
  className?: string;
}

const ErrorGuard: React.FC<ErrorGuardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorGuard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorGuard;