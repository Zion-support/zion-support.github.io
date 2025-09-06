import React from 'react';

interface LoadingSpinner.testProps {
  className?: string;
}

const LoadingSpinner.test: React.FC<LoadingSpinner.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingSpinner.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingSpinner.test;