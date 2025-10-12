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
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4bg-gray-300 rounded mb-2"
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
