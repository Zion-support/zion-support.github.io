import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LoadingSkeleton({ className = '', children }: LoadingSkeletonProps) {
  return (
    <div className={`loadingskeleton ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">LoadingSkeleton</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}