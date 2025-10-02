import React from 'react';
import { Loader2, Zap, Brain, Cpu } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'tech' | 'minimal';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const ImprovedLoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        );

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-blue-500 rounded-full animate-pulse`}></div>
        );

      case 'tech':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain className={`${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} text-blue-500 animate-pulse`} />
            </div>
          </div>
        );

      case 'minimal':
        return (
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
        );

      default:
        return (
          <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
        );
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderSpinner()}
      {text && (
        <p className={`${textSizeClasses[size]} text-slate-300 animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl p-8 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

// Skeleton loading components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-slate-800/50 rounded-xl p-6 animate-pulse ${className}`}>
    <div className="h-4 bg-slate-700 rounded w-3/4 mb-4"></div>
    <div className="h-3 bg-slate-700 rounded w-1/2 mb-2"></div>
    <div className="h-3 bg-slate-700 rounded w-2/3"></div>
  </div>
);

export const SkeletonText: React.FC<{ lines?: number; className?: string }> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-3 bg-slate-700 rounded mb-2 ${
          index === lines - 1 ? 'w-2/3' : 'w-full'
        }`}
      ></div>
    ))}
  </div>
);

export const SkeletonImage: React.FC<{ 
  width?: string; 
  height?: string; 
  className?: string 
}> = ({ 
  width = 'w-full', 
  height = 'h-48', 
  className = '' 
}) => (
  <div className={`bg-slate-700 rounded-lg animate-pulse ${width} ${height} ${className}`}></div>
);

// Loading states for different components
export const LoadingButton: React.FC<{ 
  loading?: boolean; 
  children: React.ReactNode;
  className?: string;
}> = ({ loading = false, children, className = '' }) => (
  <button 
    className={`relative ${className}`}
    disabled={loading}
  >
    {loading && (
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    )}
    <span className={loading ? 'opacity-0' : 'opacity-100'}>
      {children}
    </span>
  </button>
);

export const LoadingTable: React.FC<{ 
  rows?: number; 
  columns?: number;
  className?: string;
}> = ({ 
  rows = 5, 
  columns = 4,
  className = ''
}) => (
  <div className={`overflow-hidden ${className}`}>
    <div className="animate-pulse">
      {/* Header */}
      <div className="flex space-x-4 mb-4">
        {Array.from({ length: columns }).map((_, index) => (
          <div key={index} className="h-4 bg-slate-700 rounded flex-1"></div>
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4 mb-2">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div 
              key={colIndex} 
              className={`h-3 bg-slate-700 rounded flex-1 ${
                colIndex === columns - 1 ? 'w-1/2' : ''
              }`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ImprovedLoadingSpinner;