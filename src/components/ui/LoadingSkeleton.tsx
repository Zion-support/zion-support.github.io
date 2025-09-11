import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
  animated?: boolean;
}

export function Skeleton({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = true,
  animated = true 
}: SkeletonProps) {
  const baseClasses = `bg-gray-200 dark:bg-gray-700 ${height} ${width} ${rounded ? 'rounded' : ''}`;
  
  if (animated) {
    return (
      <motion.div
        className={`${baseClasses} ${className}`}
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
  }
  
  return <div className={`${baseClasses} ${className}`} />;
}

interface CardSkeletonProps {
  className?: string;
  lines?: number;
  showImage?: boolean;
  showAvatar?: boolean;
}

export function CardSkeleton({ 
  className = '', 
  lines = 3, 
  showImage = true,
  showAvatar = false 
}: CardSkeletonProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      {showImage && (
        <Skeleton className="w-full h-48 mb-4" />
      )}
      
      {showAvatar && (
        <div className="flex items-center mb-4">
          <Skeleton className="w-12 h-12 rounded-full mr-3" />
          <div className="flex-1">
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton 
            key={index} 
            className={`h-4 ${index === lines - 1 ? 'w-2/3' : 'w-full'}`} 
          />
        ))}
      </div>
    </div>
  );
}

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
          lines={3} 
          showImage={showImage}
          showAvatar={false}
        />
      ))}
    </div>
  );
}