import React from 'react';

interface EnhancedLoadingSkeletonProps {
  lines?: number;
  showAvatar?: boolean;
  showImage?: boolean;
  height?: string;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  lines = 3,
  showAvatar = false,
  showImage = false,
  height = 'auto',
  className = ''
}) => {
  return (
    <div className={`animate-pulse ${className}`} style={{ height }}>
      {showAvatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      )}
      
      {showImage && (
        <div className="bg-gray-300 h-48 w-full rounded mb-4"></div>
      )}
      
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedLoadingSkeleton;