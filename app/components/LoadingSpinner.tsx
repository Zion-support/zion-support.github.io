import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
  size = 'md', 
  className = '', 
  text,
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const containerClasses = fullScreen 
    ? `min-h-screen flex items-center justify-center bg-gray-50 ${className}`
    : `flex items-center justify-center ${className}`;

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-2">
        <div className="relative">
          <div
            className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}
          />
          <div className={`absolute inset-0 animate-ping rounded-full border-2 border-blue-200 opacity-20 ${sizeClasses[size]}`}></div>
        </div>
        {text && (
          <p className="text-sm text-gray-600 animate-pulse">{text}</p>
        )}
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;