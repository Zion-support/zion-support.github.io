import React from 'react';

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
  height?: string;
  width?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  lines = 3,
  className = '',
  height = 'h-4',
  width = 'w-full'
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${height} ${width} bg-gray-300 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;