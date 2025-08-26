import React from 'react';
import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
  rounded?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  count = 1, 
  height = 'h-4', 
  width = 'w-full', 
  rounded = 'rounded' 
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`bg-zion-slate-light/20 ${height} ${width} ${rounded} ${className}`}
          animate={{
            background: [
              'linear-gradient(90deg, rgba(34, 221, 210, 0.1) 25%, rgba(34, 221, 210, 0.2) 50%, rgba(34, 221, 210, 0.1) 75%)',
              'linear-gradient(90deg, rgba(34, 221, 210, 0.1) 0%, rgba(34, 221, 210, 0.2) 25%, rgba(34, 221, 210, 0.1) 50%)',
              'linear-gradient(90deg, rgba(34, 221, 210, 0.1) 25%, rgba(34, 221, 210, 0.2) 50%, rgba(34, 221, 210, 0.1) 75%)'
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'ease-in-out'
          }}
        />
      ))}
    </>
  );
};

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton height="h-4" width="w-3/4" />
        <Skeleton height="h-3" width="w-1/2" />
      </div>
    </div>
    <div className="space-y-3">
      <Skeleton count={3} />
      <Skeleton height="h-3" width="w-2/3" />
    </div>
    <div className="flex justify-between items-center mt-6">
      <Skeleton height="h-8" width="w-24" rounded="rounded-lg" />
      <Skeleton height="h-8" width="w-20" rounded="rounded-lg" />
    </div>
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton 
        key={index}
        height="h-4" 
        width={index === lines - 1 ? 'w-3/4' : 'w-full'} 
      />
    ))}
  </div>
);

export const ImageSkeleton: React.FC<{ className?: string; aspectRatio?: string }> = ({ 
  className = '', 
  aspectRatio = 'aspect-video' 
}) => (
  <div className={`${aspectRatio} ${className}`}>
    <Skeleton className="w-full h-full rounded-lg" />
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number; columns?: number; className?: string }> = ({ 
  rows = 5, 
  columns = 4, 
  className = '' 
}) => (
  <div className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl overflow-hidden ${className}`}>
    {/* Header */}
    <div className="bg-zion-slate-light/10 px-6 py-4 border-b border-zion-cyan/20">
      <div className="flex space-x-4">
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} height="h-4" width="w-20" />
        ))}
      </div>
    </div>
    
    {/* Rows */}
    <div className="divide-y divide-zion-cyan/20">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="px-6 py-4">
          <div className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <Skeleton 
                key={colIndex} 
                height="h-4" 
                width={colIndex === 0 ? 'w-32' : 'w-24'} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ListSkeleton: React.FC<{ items?: number; className?: string }> = ({ 
  items = 5, 
  className = '' 
}) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3">
        <Skeleton className="w-4 h-4 rounded-full" />
        <Skeleton height="h-4" width="w-full" />
      </div>
    ))}
  </div>
);

export const GridSkeleton: React.FC<{ 
  items?: number; 
  columns?: number; 
  className?: string;
  itemClassName?: string;
}> = ({ 
  items = 6, 
  columns = 3, 
  className = '',
  itemClassName = ''
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <CardSkeleton key={index} className={itemClassName} />
    ))}
  </div>
);

export const ProfileSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 ${className}`}>
    <div className="flex flex-col items-center text-center">
      <Skeleton className="w-24 h-24 rounded-full mb-4" />
      <Skeleton height="h-6" width="w-32" className="mb-2" />
      <Skeleton height="h-4" width="w-48" className="mb-4" />
      <div className="flex space-x-4 mb-6">
        <Skeleton height="h-8" width="w-20" rounded="rounded-lg" />
        <Skeleton height="h-8" width="w-20" rounded="rounded-lg" />
      </div>
      <div className="w-full space-y-3">
        <Skeleton count={3} />
      </div>
    </div>
  </div>
);

export const ChartSkeleton: React.FC<{ className?: string; height?: string }> = ({ 
  className = '', 
  height = 'h-64' 
}) => (
  <div className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 ${className}`}>
    <div className="flex items-center justify-between mb-6">
      <Skeleton height="h-6" width="w-32" />
      <Skeleton height="h-8" width="w-24" rounded="rounded-lg" />
    </div>
    <div className={`${height} bg-zion-slate-light/10 rounded-lg flex items-end justify-center space-x-2 p-4`}>
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton 
          key={index}
          height="h-full" 
          width="w-8" 
          className="bg-zion-cyan/20"
        />
      ))}
    </div>
    <div className="flex justify-center space-x-8 mt-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Skeleton className="w-3 h-3 rounded-full" />
          <Skeleton height="h-3" width="w-16" />
        </div>
      ))}
    </div>
  </div>
);

export const FormSkeleton: React.FC<{ fields?: number; className?: string }> = ({ 
  fields = 5, 
  className = '' 
}) => (
  <div className={`bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 ${className}`}>
    <div className="space-y-6">
      {Array.from({ length: fields }).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton height="h-4" width="w-24" />
          <Skeleton height="h-10" width="w-full" rounded="rounded-lg" />
        </div>
      ))}
      <div className="flex space-x-4 pt-4">
        <Skeleton height="h-10" width="w-24" rounded="rounded-lg" />
        <Skeleton height="h-10" width="w-20" rounded="rounded-lg" />
      </div>
    </div>
  </div>
);