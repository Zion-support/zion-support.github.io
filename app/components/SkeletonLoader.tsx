import React from 'react';
import { clsx } from 'clsx';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className,
  variant = 'rectangular',
  width,
  height,
  lines = 1,
  animated = true
}) => {
  const baseClasses = clsx(
    'bg-gray-200 rounded',
    animated && 'animate-pulse',
    className
  );

  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'h-4 rounded';
      case 'card':
        return 'rounded-lg p-4 space-y-3';
      default:
        return 'rounded';
    }
  };

  if (variant === 'card') {
    return (
      <div className={clsx(baseClasses, getVariantClasses())} style={{ width, height }}>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
      </div>
    );
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={clsx(
              baseClasses,
              getVariantClasses(),
              index === lines - 1 && 'w-3/4' // Last line is shorter
            )}
            style={{ width: index === lines - 1 ? '75%' : width, height }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={clsx(baseClasses, getVariantClasses())}
      style={{ width, height }}
    />
  );
};

export default SkeletonLoader;
