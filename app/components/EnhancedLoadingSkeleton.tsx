'use client';
import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = 'w-full',
  height = 'h-4',
  className = '',
  rounded = true
}) => {
  return (
    <div
      className={`bg-gray-700 animate-pulse ${width} ${height} ${
        rounded ? 'rounded' : ''
      } ${className}`}
    />
  );
};

interface EnhancedLoadingSkeletonProps {
  type?: 'card' | 'list' | 'text' | 'custom';
  count?: number;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  type = 'card',
  count = 1,
  className = ''
}) => {
  const renderCardSkeleton = () => (
    <div className="bg-gray-800 rounded-lg p-6 space-y-4">
      <Skeleton width="w-12" height="h-12" className="rounded-full" />
      <div className="space-y-2">
        <Skeleton width="w-3/4" height="h-6" />
        <Skeleton width="w-full" height="h-4" />
        <Skeleton width="w-2/3" height="h-4" />
      </div>
      <div className="flex space-x-2">
        <Skeleton width="w-20" height="h-8" className="rounded-full" />
        <Skeleton width="w-20" height="h-8" className="rounded-full" />
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
          <Skeleton width="w-10" height="h-10" className="rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton width="w-1/2" height="h-4" />
            <Skeleton width="w-3/4" height="h-3" />
          </div>
          <Skeleton width="w-16" height="h-6" />
        </div>
      ))}
    </div>
  );

  const renderTextSkeleton = () => (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton width="w-full" height="h-4" />
          <Skeleton width="w-5/6" height="h-4" />
          <Skeleton width="w-4/6" height="h-4" />
        </div>
      ))}
    </div>
  );

  const renderCustomSkeleton = () => (
    <div className="space-y-6">
      <div className="text-center">
        <Skeleton width="w-32" height="h-32" className="rounded-full mx-auto mb-4" />
        <Skeleton width="w-48" height="h-8" className="mx-auto mb-2" />
        <Skeleton width="w-64" height="h-4" className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-4">
            <Skeleton width="w-16" height="h-16" className="rounded-lg" />
            <Skeleton width="w-full" height="h-6" />
            <Skeleton width="w-full" height="h-4" />
            <Skeleton width="w-3/4" height="h-4" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return renderCardSkeleton();
      case 'list':
        return renderListSkeleton();
      case 'text':
        return renderTextSkeleton();
      case 'custom':
        return renderCustomSkeleton();
      default:
        return renderCardSkeleton();
    }
  };

  return (
    <div className={`animate-pulse ${className}`}>
      {type === 'list' || type === 'text' ? (
        renderSkeleton()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: count }).map((_, index) => (
            <div key={index}>
              {renderSkeleton()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnhancedLoadingSkeleton;