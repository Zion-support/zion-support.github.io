import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
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
    <div className={containerClasses} role="status" aria-live="polite">
      <div className="flex flex-col items-center space-y-2">
        <div
          className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}
          aria-hidden="true"
        />
        {text && (
          <p className="text-sm text-gray-600 animate-pulse" aria-label={text}>
            {text}
          </p>
        )}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;