import React from 'react';

interface LoadingContentSkeletonProps {
  className?: string;
}

const LoadingContentSkeleton: React.FC<LoadingContentSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingContentSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingContentSkeleton;