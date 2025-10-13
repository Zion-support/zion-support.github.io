import React from 'react';
import { cn } from '../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'cyan';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white',
    cyan: 'text-cyan-400'
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-current border-t-transparent',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
};

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showProgress = false,
  progress = 0 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated background circles */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
            <LoadingSpinner size="lg" color="white" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>

        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
            <p className="text-gray-300 text-sm mt-2">
              {Math.round(progress)}% complete
            </p>
          </div>
        )}

        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  children?: React.ReactNode;
  className?: string;
  shimmer?: boolean;
}

const LoadingCard: React.FC<LoadingCardProps> = ({ 
  children, 
  className,
  shimmer = true 
}) => {
  return (
    <div className={cn(
      'bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20',
      shimmer && 'animate-pulse',
      className
    )}>
      {children || (
        <div className="space-y-4">
          <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
        </div>
      )}
    </div>
  );
};

interface LoadingSkeletonProps {
  lines?: number;
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  lines = 3, 
  className 
}) => {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'h-4 bg-gray-300/20 rounded animate-pulse',
            index === lines - 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  );
};

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  loading = false, 
  children, 
  className,
  disabled = false 
}) => {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300',
        className
      )}
      disabled={disabled || loading}
    >
      {loading && (
        <LoadingSpinner size="sm" color="white" className="mr-2" />
      )}
      {children}
    </button>
  );
};

export {
  LoadingSpinner,
  LoadingPage,
  LoadingCard,
  LoadingSkeleton,
  LoadingButton
};