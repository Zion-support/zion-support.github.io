import React from 'react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = true 
}) => (
  <div 
    className={`bg-gray-200 animate-pulse ${height} ${width} ${rounded ? 'rounded' : ''} ${className}`}
    aria-hidden="true"
  />
);

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <Skeleton height="h-12" width="w-96" className="mx-auto mb-6" />
        <Skeleton height="h-6" width="w-3/4" className="mx-auto" />
      </div>
      
      {/* Content skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md border">
            <Skeleton height="h-6" width="w-3/4" className="mb-4" />
            <Skeleton height="h-4" width="w-full" className="mb-2" />
            <Skeleton height="h-4" width="w-5/6" className="mb-2" />
            <Skeleton height="h-4" width="w-4/6" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border">
    <Skeleton height="h-6" width="w-3/4" className="mb-4" />
    <Skeleton height="h-4" width="w-full" className="mb-2" />
    <Skeleton height="h-4" width="w-5/6" className="mb-2" />
    <Skeleton height="h-4" width="w-4/6" />
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        height="h-4" 
        width={i === lines - 1 ? 'w-3/4' : 'w-full'} 
      />
    ))}
  </div>
);

export default Skeleton;
