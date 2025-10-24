'use client';
import React from 'react';

interface EnhancedLoadingSkeletonProps {
  count?: number;
  height?: string;
  width?: string;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  count = 1,
  height = '20px',
  width = '100%',
  className = '',
}) => {
  return (
    <div className={`enhanced-loading-skeleton ${className}`}>
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

export default EnhancedLoadingSkeleton;