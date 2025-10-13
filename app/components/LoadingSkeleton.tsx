'use client';
import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animate?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = false,
  animate = true
}) => {
  const baseClasses = 'bg-gray-700/50';
  const roundedClasses = rounded ? 'rounded-full' : 'rounded-lg';
  const animateClasses = animate ? 'animate-pulse' : '';
  
  const style = {
    width: width || '100%',
    height: height || '1rem',
  };

  return (
    <div
      className={`${baseClasses} ${roundedClasses} ${animateClasses} ${className}`}
      style={style}
    />
  );
};

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    {/* Header Skeleton */}
    <div className="bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton width={40} height={40} rounded />
          <div>
            <Skeleton width={200} height={24} className="mb-2" />
            <Skeleton width={150} height={12} />
          </div>
        </div>
        <div className="hidden lg:flex space-x-6">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} width={80} height={20} />
          ))}
        </div>
        <Skeleton width={24} height={24} className="lg:hidden" />
      </div>
    </div>

    {/* Hero Section Skeleton */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Skeleton width={600} height={80} className="mx-auto mb-6" />
          <Skeleton width={800} height={32} className="mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton width={200} height={56} className="mx-auto" />
            <Skeleton width={200} height={56} className="mx-auto" />
          </div>
        </div>
      </div>
    </section>

    {/* Content Skeleton */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton width={400} height={48} className="mx-auto mb-6" />
          <Skeleton width={600} height={24} className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <Skeleton width={48} height={48} className="mb-4" />
              <Skeleton width={200} height={24} className="mb-3" />
              <Skeleton width="100%" height={60} className="mb-4" />
              <Skeleton width={120} height={20} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <Skeleton width={48} height={48} className="mb-4" />
        <Skeleton width={200} height={24} className="mb-3" />
        <Skeleton width="100%" height={60} className="mb-4" />
        <Skeleton width={120} height={20} />
      </div>
    ))}
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    {[...Array(lines)].map((_, i) => (
      <Skeleton
        key={i}
        width={i === lines - 1 ? '75%' : '100%'}
        height={16}
      />
    ))}
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number; cols?: number }> = ({ 
  rows = 5, 
  cols = 4 
}) => (
  <div className="overflow-hidden rounded-lg border border-gray-700/50">
    <div className="bg-slate-800/50 p-4">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(cols)].map((_, i) => (
          <Skeleton key={i} width="100%" height={20} />
        ))}
      </div>
    </div>
    {[...Array(rows)].map((_, rowIndex) => (
      <div key={rowIndex} className="border-t border-gray-700/50 p-4">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {[...Array(cols)].map((_, colIndex) => (
            <Skeleton key={colIndex} width="100%" height={16} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;
