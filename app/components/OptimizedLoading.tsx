import React from 'react';
import { cn } from '@/utils/cn';

interface OptimizedLoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  className?: string;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({
  message = 'Loading...',
  size = 'md',
  variant = 'spinner',
  className,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const renderSpinner = () => (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-cyan-500 border-t-transparent',
        sizeClasses[size]
      )}
      role="status"
      aria-label="Loading"
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1" role="status" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'bg-cyan-500 rounded-full animate-pulse',
            size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'
          )}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div
      className={cn(
        'bg-cyan-500 rounded-full animate-pulse',
        sizeClasses[size]
      )}
      role="status"
      aria-label="Loading"
    />
  );

  const renderSkeleton = () => (
    <div className="space-y-2" role="status" aria-label="Loading">
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded animate-pulse w-1/2" />
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center space-y-2',
        className
      )}
    >
      {renderLoader()}
      {message && (
        <p className="text-sm text-slate-600 dark:text-slate-400 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default OptimizedLoading;