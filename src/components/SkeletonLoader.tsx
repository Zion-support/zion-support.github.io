import React from 'react';

interface SkeletonLoaderProps {
  type?: 'text' | 'avatar' | 'card' | 'list' | 'custom';
  lines?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = 'text',
  lines = 1,
  className = ''
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const renderTextSkeleton = () => (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} h-4 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );

  const renderAvatarSkeleton = () => (
    <div className={`${baseClasses} h-12 w-12 rounded-full ${className}`} />
  );

  const renderCardSkeleton = () => (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <div className={`${baseClasses} h-6 w-3/4 mb-4`} />
      <div className="space-y-3">
        <div className={`${baseClasses} h-4 w-full`} />
        <div className={`${baseClasses} h-4 w-5/6`} />
        <div className={`${baseClasses} h-4 w-4/6`} />
      </div>
      <div className="mt-4 flex space-x-3">
        <div className={`${baseClasses} h-8 w-20`} />
        <div className={`${baseClasses} h-8 w-16`} />
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className={`${baseClasses} h-10 w-10 rounded-full`} />
          <div className="flex-1 space-y-2">
            <div className={`${baseClasses} h-4 w-3/4`} />
            <div className={`${baseClasses} h-3 w-1/2`} />
          </div>
        </div>
      ))}
    </div>
  );

  switch (type) {
    case 'avatar':
      return renderAvatarSkeleton();
    case 'card':
      return renderCardSkeleton();
    case 'list':
      return renderListSkeleton();
    case 'text':
    default:
      return renderTextSkeleton();
  }
};

export default SkeletonLoader;