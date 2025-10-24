'use client';
import React from 'react';

interface OptimizedLoadingProps {
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>OptimizedLoading</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default OptimizedLoading;
