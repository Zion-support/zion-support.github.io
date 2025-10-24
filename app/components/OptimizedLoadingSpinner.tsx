'use client';
import React from 'react';

interface OptimizedLoadingSpinnerProps {
  className?: string;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>OptimizedLoadingSpinner</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default OptimizedLoadingSpinner;
