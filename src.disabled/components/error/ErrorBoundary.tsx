import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorBoundary</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorBoundary;