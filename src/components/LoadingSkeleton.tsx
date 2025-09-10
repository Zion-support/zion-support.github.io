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
        ease: 'easeInOut',
      }}
    />
  );
};

interface LoadingSkeletonProps extends React.PropsWithChildren<{}> {
  type?: 'card' | 'list' | 'hero' | 'table' | 'form';
  count?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  type = 'card',
  count = 3,
  className = '',
}) => {
  const renderSkeleton = () => {
    switch (type) {
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
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <Skeleton height="h-12" width="w-12" className="rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton height="h-4" width="w-3/4" />
                  <Skeleton height="h-3" width="w-1/2" />
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'hero':
        return (
          <div className="space-y-6">
            <Skeleton height="h-12" width="w-3/4" className="mx-auto" />
            <Skeleton height="h-6" width="w-1/2" className="mx-auto" />
            <div className="flex justify-center space-x-4">
              <Skeleton height="h-10" width="w-32" />
              <Skeleton height="h-10" width="w-28" />
            </div>
          </div>
        );
      
      case 'table':
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-4">
              <Skeleton height="h-6" />
              <Skeleton height="h-6" />
              <Skeleton height="h-6" />
              <Skeleton height="h-6" />
            </div>
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4">
                <Skeleton height="h-4" />
                <Skeleton height="h-4" />
                <Skeleton height="h-4" />
                <Skeleton height="h-4" />
              </div>
            ))}
          </div>
        );
      
      case 'form':
        return (
          <div className="space-y-4">
            <Skeleton height="h-6" width="w-1/4" />
            <Skeleton height="h-10" width="w-full" />
            <Skeleton height="h-6" width="w-1/3" />
            <Skeleton height="h-10" width="w-full" />
            <Skeleton height="h-6" width="w-1/5" />
            <Skeleton height="h-20" width="w-full" />
            <div className="flex justify-end space-x-2">
              <Skeleton height="h-10" width="w-20" />
              <Skeleton height="h-10" width="w-24" />
            </div>
          </div>
        );
      
      default:
        return <Skeleton />;
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={index > 0 ? 'mt-4' : ''}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;