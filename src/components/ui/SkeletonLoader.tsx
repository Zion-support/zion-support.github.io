import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => {
  return (
    <motion.div
      className={`bg-gray-200 dark:bg-gray-700 ${height} ${width} ${rounded} ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

interface SkeletonCardProps {
  className?: string;
  lines?: number;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ 
  className = '', 
  lines = 3 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm ${className}`}>
      <Skeleton height="h-6" width="w-3/4" className="mb-4" />
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton 
          key={index} 
          height="h-4" 
          width="w-full" 
          className="mb-2" 
        />
      ))}
      <div className="flex justify-between items-center mt-4">
        <Skeleton height="h-4" width="w-20" />
        <Skeleton height="h-8" width="w-24" rounded="rounded-md" />
      </div>
    </div>
  );
};

interface SkeletonGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({ 
  rows = 3, 
  cols = 3, 
  className = '' 
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6 ${className}`}>
      {Array.from({ length: rows * cols }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

interface SkeletonHeroProps {
  className?: string;
}

export const SkeletonHero: React.FC<SkeletonHeroProps> = ({ className = '' }) => {
  return (
    <div className={`py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Skeleton height="h-16" width="w-3/4" className="mb-6 mx-auto" />
          <Skeleton height="h-6" width="w-2/3" className="mb-4 mx-auto" />
          <Skeleton height="h-6" width="w-1/2" className="mb-8 mx-auto" />
          <div className="flex justify-center space-x-4">
            <Skeleton height="h-12" width="w-32" rounded="rounded-lg" />
            <Skeleton height="h-12" width="w-32" rounded="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface SkeletonTableProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export const SkeletonTable: React.FC<SkeletonTableProps> = ({ 
  rows = 5, 
  cols = 4, 
  className = '' 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: cols }).map((_, index) => (
            <Skeleton key={index} height="h-5" width="w-full" />
          ))}
        </div>
      </div>
      
      {/* Rows */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: cols }).map((_, colIndex) => (
                <Skeleton key={colIndex} height="h-4" width="w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};