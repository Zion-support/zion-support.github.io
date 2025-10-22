import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>LoadingSpinner</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default LoadingSpinner;