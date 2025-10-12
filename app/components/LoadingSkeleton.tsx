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
    <div className={`loading-skeleton ${className}`}>
      <div className="animate-pulse">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`bg-gray-300/20 rounded ${height} mb-2 ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default LoadingSkeleton;