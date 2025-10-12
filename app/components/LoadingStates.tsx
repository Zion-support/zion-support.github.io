'use client';
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white'
  };

  return (
    <div className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
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
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <LoadingSpinner size="xl" color="primary" />
          <div className="absolute inset-0 animate-ping">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full"></div>
          </div>
        </div>
        <p className="text-white mt-4 text-lg font-medium">Loading...</p>
        <p className="text-gray-400 mt-2">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse ${className}`}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300/20 rounded-lg mr-4"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300/20 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-300/20 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300/20 rounded"></div>
        <div className="h-3 bg-gray-300/20 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300/20 rounded w-4/6"></div>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 animate-pulse">
      <div className="w-16 h-16 bg-gray-300/20 rounded-2xl mb-6"></div>
      <div className="h-6 bg-gray-300/20 rounded w-3/4 mb-4"></div>
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-300/20 rounded"></div>
        <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300/20 rounded w-4/6"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300/20 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300/20 rounded w-2/3"></div>
        <div className="h-3 bg-gray-300/20 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = ({ 
  rows = 5, 
  columns = 4 
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse">
      <div className="space-y-4">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="h-4 bg-gray-300/20 rounded flex-1"
                style={{ width: `${Math.random() * 40 + 60}%` }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TextSkeleton: React.FC<{ 
  lines?: number; 
  className?: string;
  width?: string;
}> = ({ 
  lines = 3, 
  className = '',
  width = '100%'
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-300/20 rounded mb-2"
          style={{ 
            width: index === lines - 1 ? '60%' : width,
            marginBottom: index === lines - 1 ? '0' : '0.5rem'
          }}
        ></div>
      ))}
    </div>
  );
};

export const ButtonSkeleton: React.FC<{ 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-8 w-20',
    md: 'h-10 w-24',
    lg: 'h-12 w-32'
  };

  return (
    <div 
      className={`bg-gray-300/20 rounded-lg animate-pulse ${sizeClasses[size]} ${className}`}
    ></div>
  );
};

export const ImageSkeleton: React.FC<{ 
  width?: number;
  height?: number;
  className?: string;
}> = ({ 
  width = 200,
  height = 200,
  className = ''
}) => {
  return (
    <div 
      className={`bg-gray-300/20 rounded-lg animate-pulse ${className}`}
      style={{ width, height }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 bg-gray-400/30 rounded"></div>
      </div>
    </div>
  );
};