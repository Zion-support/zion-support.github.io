<<<<<<< HEAD
import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default LoadingSkeleton;
=======
'use client'

import React from 'react'

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="loading-skeleton">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
    </div>
  )
}

export default LoadingSkeleton
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
