import React from 'react';

interface ErrorStateProps {
  className?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorState;