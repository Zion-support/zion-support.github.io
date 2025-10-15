import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${className}`} role="status" aria-live="polite">
      <div className="relative">
        <div className={`${sizeClasses[size]} border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin`} aria-hidden="true"></div>
        <div 
          className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-purple-500 rounded-full animate-spin`} 
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
          aria-hidden="true"
        ></div>
      </div>
      {text && (
        <p className="mt-4 text-cyan-400 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
