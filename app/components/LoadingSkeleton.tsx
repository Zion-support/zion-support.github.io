import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
  width?: string | number;
  height?: string | number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
  count?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'rectangular',
  width = '100%',
  height = '20px',
  className = '',
  animation = 'pulse',
  count = 1
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'text':
        return 'h-4';
      case 'rectangular':
        return 'rounded-lg';
      case 'circular':
        return 'rounded-full';
      case 'card':
        return 'rounded-xl';
      default:
        return 'rounded-lg';
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'wave':
        return 'animate-wave';
      case 'none':
        return '';
      default:
        return 'animate-pulse';
    }
  };

  const skeletonItem = (
    <motion.div
      className={`bg-gray-200 ${getVariantClasses()} ${getAnimationClasses()} ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  if (count === 1) {
    return skeletonItem;
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {skeletonItem}
        </motion.div>
      ))}
    </div>
  );
};

// Predefined skeleton components for common use cases
export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className = ''
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <LoadingSkeleton
        key={index}
        variant="text"
        width={index === lines - 1 ? '75%' : '100%'}
        height="16px"
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`p-6 border border-gray-200 rounded-xl ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <LoadingSkeleton variant="circular" width="40px" height="40px" />
      <div className="flex-1 space-y-2">
        <LoadingSkeleton variant="text" width="60%" height="16px" />
        <LoadingSkeleton variant="text" width="40%" height="14px" />
      </div>
    </div>
    <div className="space-y-2">
      <LoadingSkeleton variant="text" width="100%" height="16px" />
      <LoadingSkeleton variant="text" width="80%" height="16px" />
      <LoadingSkeleton variant="text" width="90%" height="16px" />
    </div>
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number; columns?: number; className?: string }> = ({
  rows = 5,
  columns = 4,
  className = ''
}) => (
  <div className={`space-y-3 ${className}`}>
    {/* Header */}
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, index) => (
        <LoadingSkeleton key={index} variant="text" height="20px" />
      ))}
    </div>
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <LoadingSkeleton key={colIndex} variant="text" height="16px" />
        ))}
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;