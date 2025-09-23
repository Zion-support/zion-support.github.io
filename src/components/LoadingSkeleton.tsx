import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
  animated?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = true,
  animated = true 
}) => {
  const baseClasses = `${height} ${width} bg-gray-200 dark:bg-gray-700 ${rounded ? 'rounded' : ''}`;
  const classes = `${baseClasses} ${className}`;
  
  if (!animated) {
    return <div className={classes} />;
  }
  
  return (
    <motion.div
      className={classes}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

interface LoadingSkeletonProps {
  type?: 'card' | 'list' | 'hero' | 'table' | 'form';
  count?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  type = 'card', 
  count = 3,
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'hero':
        return (
          <div className="space-y-6">
            <Skeleton height="h-12" width="w-3/4" className="mx-auto" />
            <Skeleton height="h-6" width="w-1/2" className="mx-auto" />
            <Skeleton height="h-4" width="w-2/3" className="mx-auto" />
            <div className="flex justify-center space-x-4">
              <Skeleton height="h-12" width="w-32" />
              <Skeleton height="h-12" width="w-32" />
            </div>
          </div>
        );
        
      case 'card':
        return (
          <div className="space-y-4">
            <Skeleton height="h-48" className="rounded-t-lg" />
            <div className="p-4 space-y-3">
              <Skeleton height="h-6" width="w-3/4" />
              <Skeleton height="h-4" width="w-full" />
              <Skeleton height="h-4" width="w-2/3" />
              <div className="flex justify-between items-center pt-2">
                <Skeleton height="h-8" width="w-20" />
                <Skeleton height="h-8" width="w-24" />
              </div>
            </div>
          </div>
        );
        
      case 'list':
        return (
          <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                <Skeleton height="h-12" width="w-12" className="rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton height="h-4" width="w-3/4" />
                  <Skeleton height="h-3" width="w-1/2" />
                </div>
                <Skeleton height="h-8" width="w-20" />
              </div>
            ))}
          </div>
        );
        
      case 'table':
        return (
          <div className="space-y-3">
            {/* Header */}
            <div className="flex space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} height="h-4" width="w-24" />
              ))}
            </div>
            {/* Rows */}
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex space-x-4 p-4 border-b">
                {Array.from({ length: 4 }).map((_, cellIndex) => (
                  <Skeleton key={cellIndex} height="h-4" width="w-24" />
                ))}
              </div>
            ))}
          </div>
        );
        
      case 'form':
        return (
          <div className="space-y-6">
            <Skeleton height="h-8" width="w-1/3" />
            <div className="space-y-4">
              {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Skeleton height="h-4" width="w-24" />
                  <Skeleton height="h-10" width="w-full" />
                </div>
              ))}
            </div>
            <div className="flex space-x-4 pt-4">
              <Skeleton height="h-10" width="w-24" />
              <Skeleton height="h-10" width="w-24" />
            </div>
          </div>
        );
        
      default:
        return <Skeleton />;
    }
  };

  return (
    <div className={`animate-pulse ${className}`}>
      {renderSkeleton()}
    </div>
  );
};

// Specialized skeleton components
export const HeroSkeleton: React.FC = () => (
  <LoadingSkeleton type="hero" />
);

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <LoadingSkeleton key={index} type="card" />
    ))}
  </div>
);

export const TableSkeleton: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <LoadingSkeleton type="table" count={count} />
);

export const FormSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => (
  <LoadingSkeleton type="form" count={count} />
);

export default LoadingSkeleton;