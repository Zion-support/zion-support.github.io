'use client'
import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Loading Spinner</h2>
      <p className="text-gray-600">This is a placeholder component for Loading Spinner.</p>
    </div>
  );
};

export default LoadingSpinner;
