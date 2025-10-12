import React from 'react';

interface LoadingSkeletonProps {
  children?: React.ReactNode;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default LoadingSkeleton;
