import React from 'react';

interface GlobalErrorBoundaryProps {
  // Add props here as needed
}

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">GlobalErrorBoundary</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalErrorBoundary;