import React from 'react';

interface LoadingOverlay.testProps {
  className?: string;
}

const LoadingOverlay.test: React.FC<LoadingOverlay.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingOverlay.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingOverlay.test;