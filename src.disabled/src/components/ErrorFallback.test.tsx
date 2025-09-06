import React from 'react';

interface ErrorFallback.testProps {
  className?: string;
}

const ErrorFallback.test: React.FC<ErrorFallback.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorFallback.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorFallback.test;