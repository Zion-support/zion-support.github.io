import React from 'react';

interface ErrorBoundaryProps {
  // Add props here
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = () => {
  return (
    <div>
      <h1>ErrorBoundary</h1>
      <p>Component content goes here</p>
    </div>
  );
};

export default ErrorBoundary;