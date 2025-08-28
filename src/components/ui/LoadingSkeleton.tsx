import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
  rounded?: string | boolean;
  animated?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  count = 1, 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded',
  animated = true
}) => {
  const baseClasses = `bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 ${height} ${width} ${rounded} ${className}`;
  
  if (animated) {
    return (
      <>
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            className={`animate-pulse ${baseClasses}`}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </>
    );
  }
  
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse ${baseClasses}`}
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

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
  className?: string;
}

export function TableSkeleton({ 
  rows = 5, 
  columns = 4, 
  className = '' 
}: TableSkeletonProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
        <div className="flex space-x-4">
          {Array.from({ length: columns }).map((_, index) => (
            <Skeleton key={index} className="h-4 flex-1" />
          ))}
        </div>
      </div>
      
      {/* Rows */}
      <div className="divide-y divide-gray-200 dark:divide-gray-600">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4">
            <div className="flex space-x-4">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton 
                  key={colIndex} 
                  className={`h-4 ${colIndex === 0 ? 'w-1/3' : 'flex-1'}`} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ListSkeletonProps {
  items?: number;
  className?: string;
  showAvatar?: boolean;
}

export function ListSkeleton({ 
  items = 5, 
  className = '',
  showAvatar = false 
}: ListSkeletonProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          {showAvatar && (
            <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
          )}
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

interface GridSkeletonProps {
  items?: number;
  columns?: number;
  className?: string;
  showImage?: boolean;
}

export function GridSkeleton({ 
  items = 6, 
  columns = 3, 
  className = '',
  showImage = true 
}: GridSkeletonProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: items }).map((_, index) => (
        <CardSkeleton 
          key={index} 
        />
      ))}
    </div>
  );
}
