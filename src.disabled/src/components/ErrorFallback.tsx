import React from 'react';

interface ErrorFallbackProps {
  className?: string;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorFallback</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorFallback;