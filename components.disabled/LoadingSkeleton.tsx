import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingSkeleton;