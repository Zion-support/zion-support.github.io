import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  color?: 'blue' | 'gray' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
  size = 'md', 
  className = '', 
  text,
  color = 'blue'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white',
  };

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label={text || "Loading"}
    >
      <div className="flex flex-col items-center space-y-2">
        <div
          className={`animate-spin rounded-full border-2 border-t-transparent ${colorClasses[color]} ${sizeClasses[size]}`}
          aria-hidden="true"
        />
        {text && (
          <p className="text-sm text-gray-600 animate-pulse" aria-live="polite">
            {text}
          </p>
        )}
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;