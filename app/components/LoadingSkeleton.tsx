<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/main
import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

<<<<<<< HEAD
const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
=======
const LoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({ 
>>>>>>> origin/main
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
<<<<<<< HEAD
          key={index}
          className="h-4bg-gray-300 rounded mb-2"
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
<<<<<<< HEAD
=======
=======
          key="{index}"
;
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
>>>>>>> origin/main
