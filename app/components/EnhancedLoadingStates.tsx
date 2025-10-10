'use client';
import React, { memo } from 'react';
import { Loader2, Brain, Cloud, Code, BarChart, Users, Zap } from 'lucide-react';

interface LoadingSkeletonProps {
  className?: string;
  lines?: number;
  height?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = memo(({ 
  className = '', 
  lines = 3, 
  height = 'h-4' 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`bg-gray-200 rounded mb-2 ${height} ${
          index === lines - 1 ? 'w-5/6' : 'w-full'
        }`}
      />
    ))}
  </div>
));

LoadingSkeleton.displayName = 'LoadingSkeleton';

export const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="cyber-card-enhanced p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
    <LoadingSkeleton lines={2} height="h-6" className="mb-4" />
    <LoadingSkeleton lines={3} height="h-4" className="mb-6" />
    <div className="flex justify-between items-center">
      <div className="h-4 bg-gray-200 rounded w-20"></div>
      <div className="h-8 bg-gray-200 rounded w-24"></div>
    </div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

export const StatsSkeleton: React.FC = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="cyber-card-enhanced p-6 animate-pulse">
        <div className="w-8 h-8 bg-gray-200 rounded mb-4 mx-auto"></div>
        <div className="h-8 bg-gray-200 rounded mb-2 w-16 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
      </div>
    ))}
  </div>
));

StatsSkeleton.displayName = 'StatsSkeleton';

export const PageLoader: React.FC = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-6"></div>
        <Brain className="w-8 h-8 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
      <p className="text-gray-300">Preparing your experience...</p>
    </div>
  </div>
));

PageLoader.displayName = 'PageLoader';

export const ContentLoader: React.FC<{ type?: 'service' | 'stats' | 'card' | 'text' }> = memo(({ type = 'card' }) => {
  switch (type) {
    case 'service':
      return <ServiceCardSkeleton />;
    case 'stats':
      return <StatsSkeleton />;
    case 'text':
      return <LoadingSkeleton lines={4} height="h-4" className="max-w-2xl mx-auto" />;
    default:
      return (
        <div className="cyber-card-enhanced p-6 animate-pulse">
          <LoadingSkeleton lines={3} height="h-4" />
        </div>
      );
  }
});

ContentLoader.displayName = 'ContentLoader';

export const Spinner: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = memo(({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`animate-spin text-cyan-400 ${sizeClasses[size]} ${className}`} />
  );
});

Spinner.displayName = 'Spinner';

export const LoadingButton: React.FC<{ 
  loading?: boolean; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}> = memo(({ loading = false, children, className = '', onClick }) => (
  <button
    onClick={onClick}
    disabled={loading}
    className={`cyber-button-enhanced flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {loading && <Spinner size="sm" />}
    {children}
  </button>
));

LoadingButton.displayName = 'LoadingButton';

export const LoadingOverlay: React.FC<{ 
  loading: boolean; 
  children: React.ReactNode;
  message?: string;
}> = memo(({ loading, children, message = 'Loading...' }) => (
  <div className="relative">
    {children}
    {loading && (
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <Spinner size="lg" className="mb-4" />
          <p className="text-white font-medium">{message}</p>
        </div>
      </div>
    )}
  </div>
));

LoadingOverlay.displayName = 'LoadingOverlay';

export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
  width?: string;
}> = memo(({ lines = 3, className = '', width = 'w-full' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-200 rounded animate-pulse ${width} ${
          index === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
));

SkeletonText.displayName = 'SkeletonText';

export const SkeletonCard: React.FC<{ 
  className?: string;
  showImage?: boolean;
  showActions?: boolean;
}> = memo(({ 
  className = '', 
  showImage = true, 
  showActions = true 
}) => (
  <div className={`cyber-card-enhanced p-6 animate-pulse ${className}`}>
    {showImage && (
      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
    )}
    <div className="space-y-3">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
    {showActions && (
      <div className="flex justify-between items-center mt-6">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-8 bg-gray-200 rounded w-24"></div>
      </div>
    )}
  </div>
));

SkeletonCard.displayName = 'SkeletonCard';

export default {
  ServiceCardSkeleton,
  StatsSkeleton,
  PageLoader,
  ContentLoader,
  Spinner,
  LoadingButton,
  LoadingOverlay,
  SkeletonText,
  SkeletonCard,
  LoadingSkeleton
};