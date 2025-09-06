import React from 'react';

interface ErrorContextProps {
  className?: string;
}

const ErrorContext: React.FC<ErrorContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorContext;