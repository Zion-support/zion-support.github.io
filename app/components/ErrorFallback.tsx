import React from 'react';

interface ErrorFallbackProps {
  // Add props here as needed
}

const ErrorFallback: React.FC<ErrorFallbackProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">ErrorFallback</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default ErrorFallback;