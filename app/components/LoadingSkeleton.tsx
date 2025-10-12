import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LoadingSkeletonProps {
  lines?: number;
  height?: string;
  width?: string;
  className?: string;
  animate?: boolean;
}

const SkeletonLine: React.FC<LoadingSkeletonProps> = ({
  height = 'h-4',
  width = 'w-full',
  className = '',
  animate = true
}) => (
  <div
    className={`${height} ${width} bg-gray-200 rounded ${animate ? 'animate-pulse' : ''} ${className}`}
  />
);

const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <SkeletonLine height="h-6" width="w-3/4" className="mb-4" />
    <SkeletonLine height="h-4" width="w-full" className="mb-2" />
    <SkeletonLine height="h-4" width="w-5/6" className="mb-4" />
    <div className="flex space-x-2">
      <SkeletonLine height="h-8" width="w-20" />
      <SkeletonLine height="h-8" width="w-24" />
    </div>
  </div>
);

const SkeletonList: React.FC<{ items?: number }> = ({ items = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3">
        <SkeletonLine height="h-4" width="w-4" className="rounded-full" />
        <SkeletonLine height="h-4" width="w-3/4" />
      </div>
    ))}
  </div>
);

const LoadingSkeleton: React.FC<{
  type?: 'card' | 'list' | 'text' | 'custom';
  count?: number;
  className?: string;
}> = ({ type = 'card', count = 1, className = '' }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        );
      
      case 'list':
        return (
          <div className={`space-y-4 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <SkeletonList items={3} />
              </div>
            ))}
          </div>
        );
      
      case 'text':
        return (
          <div className={`space-y-3 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <SkeletonLine key={index} height="h-4" width="w-full" />
            ))}
          </div>
        );
      
      case 'custom':
        return (
          <div className={`space-y-4 ${className}`}>
            <SkeletonLine height="h-8" width="w-1/2" />
            <SkeletonLine height="h-4" width="w-full" />
            <SkeletonLine height="h-4" width="w-3/4" />
            <div className="flex space-x-4 mt-6">
              <SkeletonLine height="h-10" width="w-24" />
              <SkeletonLine height="h-10" width="w-32" />
            </div>
          </div>
        );
      
      default:
        return <SkeletonCard />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Loading - Zion Tech Group</title>
        <meta name="description" content="Loading content..." />
      </Helmet>
      <div className="p-6">
        {renderSkeleton()}
      </div>
    </>
  );
};

export default LoadingSkeleton;