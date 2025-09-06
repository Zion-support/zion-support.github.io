import React from 'react';

interface ErrorBoundary.testProps {
  className?: string;
}

const ErrorBoundary.test: React.FC<ErrorBoundary.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ErrorBoundary.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorBoundary.test;