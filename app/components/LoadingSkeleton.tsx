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
  rounded = false 
}) => (
  <div 
    className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${height} ${width} ${
      rounded ? 'rounded-full' : 'rounded'
    } ${className}`}
  />
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-pulse">
    <Skeleton height="h-48" className="mb-4" />
    <Skeleton height="h-4" width="w-3/4" className="mb-2" />
    <Skeleton height="h-4" width="w-1/2" className="mb-4" />
    <div className="flex space-x-2">
      <Skeleton height="h-6" width="w-16" rounded />
      <Skeleton height="h-6" width="w-20" rounded />
    </div>
  </div>
);

export const BlogPostSkeleton: React.FC = () => (
  <article className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 animate-pulse">
    <Skeleton height="h-48" className="mb-4" />
    <div className="flex items-center gap-4 mb-3">
      <Skeleton height="h-4" width="w-20" />
      <Skeleton height="h-4" width="w-16" />
    </div>
    <Skeleton height="h-6" width="w-3/4" className="mb-2" />
    <Skeleton height="h-4" width="w-full" className="mb-2" />
    <Skeleton height="h-4" width="w-2/3" className="mb-4" />
    <div className="flex justify-between items-center">
      <Skeleton height="h-4" width="w-24" />
      <Skeleton height="h-4" width="w-20" />
    </div>
  </article>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
    <Skeleton height="h-16" width="w-16" className="mx-auto mb-4 rounded-lg" />
    <Skeleton height="h-6" width="w-3/4" className="mx-auto mb-3" />
    <Skeleton height="h-4" width="w-full" className="mb-2" />
    <Skeleton height="h-4" width="w-5/6" className="mb-4" />
    <Skeleton height="h-6" width="w-24" className="mx-auto rounded-full" />
  </div>
);

export default Skeleton;
