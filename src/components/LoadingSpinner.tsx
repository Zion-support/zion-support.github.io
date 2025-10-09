'use client';
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  color?: 'cyan' | 'purple' | 'pink' | 'white';
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  text = 'Loading...',
  color = 'cyan',
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
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    white: 'text-white'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Animated Spinner */}
      <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>

      {/* Loading Text */}
      {text && (
        <p className={`mt-4 text-sm ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Alternative loading components
export const DotsLoading: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`}>
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

export const PulseLoading: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`}>
    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
  </div>
);

export const WaveLoading: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex space-x-1 ${className}`}>
    <div className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
    <div className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
    <div className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
    <div className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
    <div className="w-1 h-6 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
  </div>
);

export const SkeletonLoader: React.FC<{ 
  lines?: number; 
  className?: string;
  height?: string;
}> = ({ 
  lines = 3, 
  className = '',
  height = 'h-4'
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`${height} bg-gray-300 rounded mb-2 ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}>
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

export const TableSkeleton: React.FC<{ 
  rows?: number; 
  columns?: number;
  className?: string;
}> = ({ 
  rows = 5, 
  columns = 4,
  className = ''
}) => (
  <div className={`animate-pulse ${className}`}>
    <div className="grid grid-cols-4 gap-4 mb-4">
      {Array.from({ length: columns }).map((_, index) => (
        <div key={index} className="h-4 bg-gray-300 rounded"></div>
      ))}
    </div>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="grid grid-cols-4 gap-4 mb-2">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <div key={colIndex} className="h-4 bg-gray-200 rounded"></div>
        ))}
      </div>
    ))}
  </div>
);

export default LoadingSpinner;