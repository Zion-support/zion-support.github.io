import React from 'react';

interface LightweightErrorBoundaryProps {
  // Add props here
}

const LightweightErrorBoundary: React.FC<LightweightErrorBoundaryProps> = () => {
  return (
    <div>
      <h1>LightweightErrorBoundary</h1>
      <p>Component content goes here</p>
    </div>
  );
};

export default LightweightErrorBoundary;