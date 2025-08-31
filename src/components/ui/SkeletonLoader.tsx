<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
=======
import React from 'react.ts';
import { cn               } from '../../utils/cn';

interface SkeletonProps extends React.PropsWithChildren<{}> {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

  className?: string;
<<<<<<< HEAD
  count?: number;
  height?: string;
  width?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  count = 1,
  height = 'h-4',
  width = 'w-full',
  rounded = 'md'
}) => {
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
=======
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pulse' | 'wave' | 'none';

}

export function Skeleton(...args: any[]): any {
  const baseClasses = 'bg-gray-300 dark:bg-gray-700';
  
  const variantClasses = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: '',
    rounded: 'rounded-lg'
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  };

<<<<<<< HEAD
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${height} ${width} ${roundedClasses[rounded]} ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
=======
// Predefined skeleton components for common use cases
export function SkeletonText(...args: any[]): any {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: anyanyanyanyanyanyanyanyanyanyanyanyanyanylines }).map((_, i)               => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? '75%' : '100%'}
          className="h-4"
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        />
      ))}
    </>
  );
};

<<<<<<< HEAD
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2" />
=======
export function SkeletonCard(...args: any[]): any {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      <div className="flex items-center space-x-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} />
      <div className="flex space-x-2">
        <Skeleton variant="rounded" width={80} height={32} />
        <Skeleton variant="rounded" width={100} height={32} />
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      </div>
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-2" />
    <Skeleton className="h-4 w-4/6" />
  </div>
);

<<<<<<< HEAD
export const SkeletonTable: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <Skeleton className="h-6 w-32" />
    </div>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton
                key={colIndex}
                className="h-4 flex-1"
                width={colIndex === 0 ? 'w-24' : 'w-full'}
              />
            ))}
          </div>
=======
export function SkeletonTable(...args: any[]): any {
  return (
    <div className={cn('space-y-3', className)}>
      {/* Header */}
      <div className="flex space-x-4">
        {Array.from({ length: anyanyanyanyanyanyanyanyanyanyanyanyanyanycolumns }).map((_, i)               => (
          <Skeleton key={i} variant="text" width={120} height={20} />
        ))}
      </div>
      
      {/* Rows */}
      {Array.from({ length: anyanyanyanyanyanyanyanyanyanyanyanyanyanyrows }).map((_, rowIndex)               => (
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ length: anyanyanyanyanyanyanyanyanyanyanyanyanyanycolumns }).map((_, colIndex)               => (
            <Skeleton
              key={colIndex}
              variant="text"
              width={colIndex === 0 ? 150 : 100}
              height={16}
            />
          ))}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        </div>
      ))}
    </div>
  </div>
);

<<<<<<< HEAD
export const SkeletonHero: React.FC = () => (
  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
        <div className="flex justify-center space-x-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
    </div>
  </div>
);

export const SkeletonGrid: React.FC<{ items?: number; className?: string }> = ({ 
  items = 6, 
  className = '' 
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);
=======
export function SkeletonGrid(...args: any[]): any {
  return (
    <div className={cn(
      'grid gap-6',
      columns === 1 && 'grid-cols-1',
      columns === 2 && 'grid-cols-1 md:grid-cols-2',
      columns === 3 && 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      columns === 4 && 'grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4',
      className
    )}>
      {Array.from({ length: items }).map((_, i)               => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export function SkeletonHero(...args: any[]): any {
  return (
    <div className={cn('space-y-8', className)}>
      {/* Title */}
      <div className="space-y-4">
        <Skeleton variant="text" width="80%" height={48} className="mx-auto" />
        <Skeleton variant="text" width="60%" height={24} className="mx-auto" />
      </div>
      
      {/* Description */}
      <Skeleton variant="text" lines={3} className="max-w-2xl mx-auto" />
      
      {/* CTA Buttons */}
      <div className="flex justify-center space-x-4">
        <Skeleton variant="rounded" width={160} height={48} />
        <Skeleton variant="rounded" width={140} height={48} />
      </div>
    </div>
  );
}
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
