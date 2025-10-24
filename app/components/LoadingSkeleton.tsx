import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'loadingskeleton ' + className}>
      {children || <p>LoadingSkeleton component</p>}
    </div>
  );
};

export default LoadingSkeleton;
