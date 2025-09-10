import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const colorClasses = {
  primary: 'border-cyan-500',
  secondary: 'border-blue-500',
  white: 'border-white',
  gray: 'border-gray-400',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className = '',
}) => {
  const spinner = (
    <div className={`flex items-center justify-center ${fullScreen ? 'min-h-screen' : ''} ${className}`}>
      <div className="text-center">
        <div
          className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]} mx-auto`}
          role="status"
          aria-label="Loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
        {text && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {text}
          </p>
        )}
      </div>
    </div>
  );

  return spinner;
};

// Skeleton loading components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}>
    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
  </div>
);

export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
  width?: string;
}> = ({ 
  lines = 3, 
  className = '',
  width = 'w-full'
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 ${
          index === lines - 1 ? 'w-3/4' : width
        }`}
      ></div>
    ))}
  </div>
);

export const SkeletonImage: React.FC<{ 
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}> = ({ 
  className = '',
  aspectRatio = 'square'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
  };

  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${aspectClasses[aspectRatio]} ${className}`}
    ></div>
  );
};

// Progress bar component
export const ProgressBar: React.FC<{
  progress: number;
  className?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}> = ({
  progress,
  className = '',
  showPercentage = false,
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-cyan-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
  };

  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 ${className}`}>
      <div
        className={`h-2 rounded-full transition-all duration-300 ${colorClasses[color]}`}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${progress}%`}
      >
        {showPercentage && (
          <span className="sr-only">{progress}% complete</span>
        )}
      </div>
      {showPercentage && (
        <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 block">
          {Math.round(progress)}%
        </span>
      )}
    </div>
  );
};

// Loading states for different components
export const LoadingStates = {
  Card: () => (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <SkeletonCard className="h-20" />
      <SkeletonText lines={2} className="mt-4" />
    </div>
  ),
  
  List: () => (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <SkeletonImage className="w-12 h-12" />
          <div className="flex-1">
            <SkeletonText lines={2} width="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
  
  Table: () => (
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <SkeletonText lines={1} width="w-1/4" />
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
          <SkeletonText lines={1} />
        </div>
      ))}
    </div>
  ),
};