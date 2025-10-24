'use client';
import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>LoadingSkeleton</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default LoadingSkeleton;
