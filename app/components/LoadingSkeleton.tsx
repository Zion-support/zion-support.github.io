'use client'
import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  lines = 3 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        {Array.from({ length: lines }).map((_, index) => (
          <div key={index} className="flex space-x-4">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;