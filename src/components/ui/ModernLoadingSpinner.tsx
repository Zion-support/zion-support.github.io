import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => (
  <div className={`${height} ${width} ${rounded} bg-gray-200 animate-pulse ${className}`} />
);

interface ModernLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'bars' | 'skeleton';
  text?: string;
  showSkeleton?: boolean;
  skeletonCount?: number;
}

export const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'spinner',
  text = 'Loading...',
  showSkeleton = false,
  skeletonCount = 3
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${sizeClasses[size]} bg-blue-600 rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-1 ${sizeClasses[size].split(' ')[1]} bg-gradient-to-t from-blue-600 to-cyan-500 rounded-full`}
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );

      case 'skeleton':
        return (
          <div className="space-y-3">
            {Array.from({ length: skeletonCount }).map((_, i) => (
              <div key={i} className="flex space-x-3">
                <Skeleton height="h-10" width="w-10" rounded="rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton height="h-4" width="w-3/4" />
                  <Skeleton height="h-3" width="w-1/2" />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <motion.div
            className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-600 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
    }
  };

  if (showSkeleton) {
    return (
      <div className="w-full max-w-md mx-auto p-6">
        <div className="space-y-4">
          {/* Header skeleton */}
          <div className="text-center space-y-3">
            <Skeleton height="h-8" width="w-48" className="mx-auto" />
            <Skeleton height="h-4" width="w-64" className="mx-auto" />
          </div>
          
          {/* Content skeleton */}
          {renderSpinner()}
          
          {/* Footer skeleton */}
          <div className="flex justify-center space-x-4">
            <Skeleton height="h-8" width="w-20" />
            <Skeleton height="h-8" width="w-20" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      {renderSpinner()}
      {text && (
        <motion.p
          className={`${textSizes[size]} text-gray-600 font-medium`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Specialized loading components
export const PageLoadingSpinner: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
    <ModernLoadingSpinner size="lg" variant="spinner" text="Loading page..." />
  </div>
);

export const ContentLoadingSpinner: React.FC = () => (
  <div className="py-12 flex items-center justify-center">
    <ModernLoadingSpinner size="md" variant="dots" text="Loading content..." />
  </div>
);

export const TableLoadingSpinner: React.FC = () => (
  <div className="w-full">
    <ModernLoadingSpinner variant="skeleton" showSkeleton skeletonCount={5} />
  </div>
);

export const CardLoadingSpinner: React.FC = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="space-y-4">
      <Skeleton height="h-6" width="w-3/4" />
      <Skeleton height="h-4" width="w-full" />
      <Skeleton height="h-4" width="w-2/3" />
      <div className="flex space-x-2">
        <Skeleton height="h-8" width="w-20" />
        <Skeleton height="h-8" width="w-24" />
      </div>
    </div>
  </div>
);

export const GridLoadingSpinner: React.FC<{ columns?: number }> = ({ columns = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: columns }).map((_, i) => (
      <CardLoadingSpinner key={i} />
    ))}
  </div>
);

export const InlineLoadingSpinner: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => (
  <div className="inline-flex items-center space-x-2">
    <ModernLoadingSpinner size={size} variant="dots" />
    <span className="text-sm text-gray-500">Loading...</span>
  </div>
);