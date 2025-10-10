import React from 'react';
import { Loader2, Brain, Zap, Cloud, Code } from 'lucide-react';

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
    />
  );
};

interface PageLoaderProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = 'Loading...', 
  showProgress = false,
  progress = 0 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 cyber-text">
          {message}
        </h2>
        
        {showProgress && (
          <div className="w-64 mx-auto">
            <div className="bg-slate-800 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm">{progress}% Complete</p>
          </div>
        )}
        
        <div className="flex justify-center mt-6">
          <LoadingSpinner size="lg" />
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="cyber-card p-6 animate-pulse">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-slate-700 rounded-lg"></div>
          </div>
          <div className="h-6 bg-slate-700 rounded mb-3"></div>
          <div className="h-4 bg-slate-700 rounded mb-2"></div>
          <div className="h-4 bg-slate-700 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-700 rounded"></div>
            <div className="h-3 bg-slate-700 rounded"></div>
            <div className="h-3 bg-slate-700 rounded w-3/4"></div>
          </div>
          <div className="mt-6 h-8 bg-slate-700 rounded"></div>
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
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="h-4 bg-slate-700 rounded animate-pulse"></div>
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
    <div className="overflow-hidden">
      <div className="grid gap-4 p-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: rows * columns }).map((_, index) => (
          <div key={index} className="h-4 bg-slate-700 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};

interface ChartSkeletonProps {
  height?: number;
}

export const ChartSkeleton: React.FC<ChartSkeletonProps> = ({ height = 300 }) => {
  return (
    <div 
      className="bg-slate-800 rounded-lg p-6 animate-pulse"
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
              width: '10%'
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

export const FeatureSkeleton: React.FC<FeatureSkeletonProps> = ({ count = 3 }) => {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-slate-700 rounded-lg animate-pulse"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-3 bg-slate-700 rounded w-full animate-pulse"></div>
            <div className="h-3 bg-slate-700 rounded w-2/3 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Specialized loading components for different sections
export const AIServicesSkeleton = () => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto animate-pulse"></div>
    </div>
    <ServiceCardSkeleton count={8} />
  </div>
);

export const ITServicesSkeleton = () => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto animate-pulse"></div>
    </div>
    <ServiceCardSkeleton count={6} />
  </div>
);

export const MicroSAASSkeleton = () => (
  <div className="space-y-8">
    <div className="text-center">
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto mb-4 animate-pulse"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto animate-pulse"></div>
    </div>
    <ServiceCardSkeleton count={12} />
  </div>
);

export default {
  LoadingSpinner,
  PageLoader,
  ServiceCardSkeleton,
  ContentSkeleton,
  TableSkeleton,
  ChartSkeleton,
  FeatureSkeleton,
  AIServicesSkeleton,
  ITServicesSkeleton,
  MicroSAASSkeleton
};