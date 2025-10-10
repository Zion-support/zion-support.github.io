import React from 'react';
import { Loader2, Brain, Zap, Cloud, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
};

interface SkeletonCardProps {
  className?: string;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ className = '' }) => (
  <div className={`animate-pulse bg-white/5 rounded-2xl p-6 ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 bg-white/10 rounded-lg"></div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-white/10 rounded w-3/4"></div>
        <div className="h-3 bg-white/10 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-3">
      <div className="h-4 bg-white/10 rounded"></div>
      <div className="h-4 bg-white/10 rounded w-5/6"></div>
      <div className="h-4 bg-white/10 rounded w-4/6"></div>
    </div>
  </div>
);

interface PageLoaderProps {
  message?: string;
  showIcon?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = "Loading...", 
  showIcon = true 
}) => {
  const icons = [Brain, Zap, Cloud, Shield];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  const IconComponent = randomIcon;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        {showIcon && (
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
          </div>
        )}
        <div className="flex items-center justify-center space-x-2">
          <LoadingSpinner size="lg" className="text-cyan-400" />
          <span className="text-xl text-gray-300 font-medium">{message}</span>
        </div>
        <div className="mt-4">
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContentSkeletonProps {
  count?: number;
  className?: string;
}

export const ContentSkeleton: React.FC<ContentSkeletonProps> = ({ 
  count = 3, 
  className = '' 
}) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);

interface ButtonLoadingProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLoading: React.FC<ButtonLoadingProps> = ({ 
  loading = false, 
  children, 
  className = '' 
}) => (
  <button 
    className={`relative inline-flex items-center justify-center ${className}`}
    disabled={loading}
  >
    {loading && (
      <LoadingSpinner size="sm" className="mr-2" />
    )}
    {children}
  </button>
);

export default {
  LoadingSpinner,
  SkeletonCard,
  PageLoader,
  ContentSkeleton,
  ButtonLoading
};