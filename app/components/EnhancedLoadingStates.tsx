import React from 'react';
import { Loader2, Zap, Brain, Globe } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin mb-4`} />
      <p className="text-gray-300 text-sm">{message}</p>
    </div>
  );
};

interface SkeletonCardProps {
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ className = '' }) => (
  <div className={`bg-slate-800 rounded-xl p-6 animate-pulse ${className}`}>
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-slate-700 rounded-lg mr-4"></div>
      <div className="flex-1">
        <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-slate-700 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-slate-700 rounded"></div>
      <div className="h-3 bg-slate-700 rounded w-5/6"></div>
      <div className="h-3 bg-slate-700 rounded w-4/6"></div>
    </div>
  </div>
);

interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export const SkeletonText: React.FC<SkeletonTextProps> = ({ 
  lines = 3, 
  className = '' 
}) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`h-3 bg-slate-700 rounded animate-pulse ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);

interface PageLoadingProps {
  message?: string;
  showSkeleton?: boolean;
}

export const PageLoading: React.FC<PageLoadingProps> = ({ 
  message = 'Loading Zion Tech Group...',
  showSkeleton = true 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    {/* Header Skeleton */}
    <div className="bg-slate-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-slate-700 rounded-lg animate-pulse"></div>
            <div className="h-6 bg-slate-700 rounded w-32 animate-pulse"></div>
          </div>
          <div className="hidden lg:flex space-x-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 bg-slate-700 rounded w-20 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Hero Section Skeleton */}
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="h-16 bg-slate-700 rounded w-3/4 mx-auto mb-6 animate-pulse"></div>
        <div className="space-y-3 mb-8">
          <div className="h-4 bg-slate-700 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-slate-700 rounded w-5/6 mx-auto animate-pulse"></div>
          <div className="h-4 bg-slate-700 rounded w-4/6 mx-auto animate-pulse"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <div className="h-12 bg-slate-700 rounded w-32 animate-pulse"></div>
          <div className="h-12 bg-slate-700 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    </div>

    {/* Content Skeleton */}
    {showSkeleton && (
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Loading Message */}
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-slate-800 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-white animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  </div>
);

interface ServiceLoadingProps {
  serviceType: 'ai' | 'micro-saas' | '5g';
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ serviceType }) => {
  const getServiceIcon = () => {
    switch (serviceType) {
      case 'ai': return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'micro-saas': return <Zap className="w-8 h-8 text-purple-400" />;
      case '5g': return <Globe className="w-8 h-8 text-green-400" />;
      default: return <Zap className="w-8 h-8 text-cyan-400" />;
    }
  };

  const getServiceColor = () => {
    switch (serviceType) {
      case 'ai': return 'from-cyan-500 to-blue-500';
      case 'micro-saas': return 'from-purple-500 to-pink-500';
      case '5g': return 'from-green-500 to-teal-500';
      default: return 'from-cyan-500 to-purple-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className={`w-20 h-20 bg-gradient-to-r ${getServiceColor()} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse`}>
          {getServiceIcon()}
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Loading {serviceType.toUpperCase()} Services...
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default {
  LoadingSpinner,
  SkeletonCard,
  SkeletonText,
  PageLoading,
  ServiceLoading
};
