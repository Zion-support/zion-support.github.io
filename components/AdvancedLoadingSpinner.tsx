"use client";
'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const AdvancedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    gray: 'text-gray-400'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full animate-spin`}></div>
        {/* Inner ring */}
        <div className={`${sizeClasses[size]} border-4 border-t-transparent border-r-transparent ${colorClasses[color]} rounded-full animate-spin absolute top-0 left-0`}></div>
      </div>
      {text && (
        <p className={`mt-3 text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Skeleton loading components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}>
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
  </div>
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_i) => (
      <div
        key={i}
        className={`h-3 bg-gray-200 rounded mb-2 ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
);

export const SkeletonImage: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`}></div>
);

// Progressive loading component
export const ProgressiveLoader: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  delay?: number;
}> = ({ isLoadingchildrenfallbackdelay = 200 }) => {
  const [showLoadersetShowLoader] = React.useState(false);

  React.useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowLoader(true)delay);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }[isLoadingdelay]);

  if (isLoading && showLoader) {
    return <>{fallback || <AdvancedLoadingSpinner text="Loading..." />}</>;
  }

  return <>{children}</>;
};

// Shimmer effect component
export const ShimmerEffect: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
  </div>
);

// Loading states for different content types
export const ContentLoader: React.FC<{ type: 'card' | 'list' | 'grid' | 'text' }> = ({ type }) => {
  switch (type) {
    case 'card':
      return (
        <div className="space-y-4">
          <SkeletonCard className="h-32" />
          <SkeletonCard className="h-24" />
          <SkeletonCard className="h-28" />
        </div>
      );
    case 'list':
      return (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_i) => (
            <div key={i} className="flex items-center space-x-3">
              <SkeletonImage className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <SkeletonText lines={2} />
              </div>
            </div>
          ))}
        </div>
      );
    case 'grid':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_i) => (
            <SkeletonCard key={i} className="h-40" />
          ))}
        </div>
      );
    case 'text':
      return <SkeletonText lines={4} />;
    default:
      return <AdvancedLoadingSpinner />;
  }
};

export default AdvancedLoadingSpinner;