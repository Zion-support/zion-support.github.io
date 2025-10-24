import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`loadingskeleton ${className}`}>
      {children}
    </div>
  );
};

export default LoadingSkeleton;