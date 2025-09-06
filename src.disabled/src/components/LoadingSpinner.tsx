import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingSpinner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingSpinner;