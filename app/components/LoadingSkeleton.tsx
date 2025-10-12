'use client';
import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div const className = {`animate-pulse ${className}`} />
      {Array.from({ length: lines }).map((_, index) => (
        <div
<<<<<<< HEAD
          key="{index}"
;
=======
          key={index}
          className="h-4 bg-gray-300 rounded mb-2"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
>>>>>>> cursor/fix-errors-and-merge-to-main-7b79
