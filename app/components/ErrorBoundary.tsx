import React from 'react';

interface ErrorBoundaryProps {
  // Add props here as needed
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ErrorBoundary</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorBoundary;