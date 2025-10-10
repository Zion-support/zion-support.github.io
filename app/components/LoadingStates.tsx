'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full' 
}) => (
  <div className={`animate-pulse bg-gray-300 rounded ${height} ${width} ${className}`} />
);

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-pulse">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gray-300 rounded-lg" />
      <div className="space-y-2">
        <Skeleton height="h-6" width="w-32" />
        <Skeleton height="h-4" width="w-24" />
      </div>
    </div>
    <div className="space-y-3">
      <Skeleton height="h-4" width="w-full" />
      <Skeleton height="h-4" width="w-3/4" />
      <Skeleton height="h-4" width="w-1/2" />
    </div>
  </div>
);

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

export const ButtonLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <Loader2 className={`${sizeClasses[size]} animate-spin`} />
  );
};

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => (
  <div className="space-y-4">
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton 
            key={colIndex} 
            height="h-4" 
            width="w-full" 
            className={colIndex === 0 ? 'w-1/4' : ''}
          />
        ))}
      </div>
    ))}
  </div>
);

export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-3">
        <Skeleton height="h-4" width="w-4" className="rounded-full" />
        <Skeleton height="h-4" width="w-3/4" />
      </div>
    ))}
  </div>
);