import React from 'react';

interface LoadingSkeletonProps {
  children?: React.ReactNode;
  className?: string;
  lines?: number;
  height?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  children,
  className = '',
  lines = 3,
  height = 'h-4'
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {children || (
        <div className="space-y-3">
          {Array.from({ length: lines }).map((_, index) => (
            <div key={index} className={`bg-gray-300 rounded ${height} ${index === lines - 1 ? 'w-3/4' : 'w-full'}`}></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingSkeleton;