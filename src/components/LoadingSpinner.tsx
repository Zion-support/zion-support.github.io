'use client';
import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>LoadingSpinner</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default LoadingSpinner;
