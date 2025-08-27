import React from 'react';

interface SkeletonProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
  rounded?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  count = 1, 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${height} ${width} ${rounded} ${className}`}
        />
      ))}
    </>
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="flex-1">
        <Skeleton height="h-4" width="w-3/4" />
        <Skeleton height="h-3" width="w-1/2" className="mt-2" />
      </div>
    </div>
    <Skeleton height="h-4" width="w-full" className="mb-2" />
    <Skeleton height="h-4" width="w-5/6" className="mb-2" />
    <Skeleton height="h-4" width="w-4/6" />
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-8"></div>
    <div className="max-w-4xl mx-auto text-center">
      <Skeleton height="h-12" width="w-3/4" className="mx-auto mb-4" />
      <Skeleton height="h-6" width="w-2/3" className="mx-auto mb-6" />
      <div className="flex justify-center space-x-4">
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg" />
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg" />
      </div>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 animate-pulse">
    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4"></div>
    <Skeleton height="h-6" width="w-3/4" className="mb-3" />
    <Skeleton height="h-4" width="w-full" className="mb-2" />
    <Skeleton height="h-4" width="w-5/6" className="mb-4" />
    <div className="flex justify-between items-center">
      <Skeleton height="h-8" width="w-24" rounded="rounded-lg" />
      <Skeleton height="h-4" width="w-16" />
    </div>
  </div>
);