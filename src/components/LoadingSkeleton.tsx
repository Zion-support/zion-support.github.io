import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSkeleton({
  className = '',
  children
}: LoadingSkeletonProps) {
  return (
    <div className={`loadingskeleton ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            Loading Skeleton
          </h3>
          <p className="text-gray-600">
            Component content will be added here.
          </p>
        </div>
      )}
    </div>
  );
}