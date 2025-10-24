'use client';
import React from 'react';

interface LoadingStatesProps {
  className?: string;
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>LoadingStates</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default LoadingStates;
