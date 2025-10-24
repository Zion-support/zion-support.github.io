'use client';
import React from 'react';

interface LoadingSkeletonProps {
  count?: number;
  height?: string;
  width?: string;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  count = 1,
  height = '20px',
  width = '100%',
  className = '',
}) => {
  return (
    <div className={`loading-skeleton ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="skeleton-item"
          style={{ height, width }}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;