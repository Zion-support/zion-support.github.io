import React from 'react';
import { Loader2, Brain, Zap, Cloud, Code, BarChart, Users, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <Loader2 
      className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`}
      aria-label="Loading"
    />
  );
};

interface PageLoaderProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = "Loading...", 
  showProgress = false,
  progress = 0 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          {message}
        </h2>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>
        )}

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface ServiceCardSkeletonProps {
  count?: number;
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index}
          className="bg-slate-800/50 rounded-lg p-6 animate-pulse"
          role="status"
          aria-label="Loading service card"
        >
          {/* Icon */}
          <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
          
          {/* Title */}
          <div className="h-6 bg-slate-700 rounded mb-3 w-3/4"></div>
          
          {/* Description */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            <div className="h-4 bg-slate-700 rounded w-4/6"></div>
          </div>
          
          {/* Price */}
          <div className="h-5 bg-slate-700 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

interface ContentSkeletonProps {
  lines?: number;
}

export const ContentSkeleton: React.FC<ContentSkeletonProps> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`h-4 bg-slate-700 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        ></div>
      ))}
    </div>
  );
};

interface TableSkeletonProps {
  rows?: number;
  columns?: number;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="animate-pulse">
      <div className="overflow-hidden rounded-lg border border-slate-700">
        {/* Header */}
        <div className="bg-slate-800 px-6 py-4">
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: columns }).map((_, index) => (
              <div key={index} className="h-4 bg-slate-700 rounded"></div>
            ))}
          </div>
        </div>
        
        {/* Rows */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="px-6 py-4 border-t border-slate-700">
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <div key={colIndex} className="h-4 bg-slate-700 rounded"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ChartSkeletonProps {
  height?: string;
}

export const ChartSkeleton: React.FC<ChartSkeletonProps> = ({ height = '300px' }) => {
  return (
    <div 
      className="bg-slate-800/50 rounded-lg p-6 animate-pulse"
      style={{ height }}
    >
      <div className="h-6 bg-slate-700 rounded mb-4 w-1/3"></div>
      <div className="flex items-end justify-between h-48">
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={index}
            className="bg-slate-700 rounded-t"
            style={{ 
              height: `${Math.random() * 100 + 20}%`,
              width: '8%'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

interface FeatureSkeletonProps {
  count?: number;
}

export const FeatureSkeleton: React.FC<FeatureSkeletonProps> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="text-center animate-pulse">
          {/* Icon */}
          <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-4"></div>
          
          {/* Title */}
          <div className="h-6 bg-slate-700 rounded mb-3 w-3/4 mx-auto"></div>
          
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-700 rounded w-5/6 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

interface BlogPostSkeletonProps {
  count?: number;
}

export const BlogPostSkeleton: React.FC<BlogPostSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden animate-pulse">
          {/* Image */}
          <div className="h-48 bg-slate-700"></div>
          
          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <div className="h-6 bg-slate-700 rounded mb-3 w-4/5"></div>
            
            {/* Excerpt */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-slate-700 rounded w-full"></div>
              <div className="h-4 bg-slate-700 rounded w-5/6"></div>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
            </div>
            
            {/* Meta */}
            <div className="flex items-center justify-between">
              <div className="h-4 bg-slate-700 rounded w-1/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Loading states for specific components
export const NavigationSkeleton: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-slate-700 rounded-lg"></div>
          <div className="h-6 bg-slate-700 rounded w-32"></div>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-4 bg-slate-700 rounded w-16"></div>
          ))}
        </div>
        <div className="w-6 h-6 bg-slate-700 rounded lg:hidden"></div>
      </div>
    </div>
  </nav>
);

export const FooterSkeleton: React.FC = () => (
  <footer className="bg-slate-900 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-pulse">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <div className="h-6 bg-slate-700 rounded mb-4 w-1/2"></div>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, linkIndex) => (
                <div key={linkIndex} className="h-4 bg-slate-700 rounded w-3/4"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);