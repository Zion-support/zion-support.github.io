import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  color?: string;
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
  size = 'medium', 
  color = '#8B5CF6', 
  text,
  className,
  fullScreen = false
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-32 h-32'
  };

  const containerClasses = cn(
    'flex flex-col items-center justify-center gap-4',
    fullScreen && 'min-h-screen',
    className
  );

  return (
    <div className={containerClasses} role="status" aria-label="Loading">
      <div 
        className={cn(
          'animate-spin rounded-full border-2 border-solid border-transparent',
          sizeClasses[size]
        )}
        style={{ 
          borderTopColor: color,
          borderRightColor: color
        }}
        aria-hidden="true"
      />
      {text && (
        <p className="text-sm text-gray-400 animate-pulse" aria-live="polite">
          {text}
        </p>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export { LoadingSpinner };