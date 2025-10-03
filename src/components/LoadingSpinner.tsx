import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner = memo<LoadingSpinnerProps>(({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-8'
  };

  return (
    <div className={`flex items-center justify-center h-full p-8 ${className}`} role="status" aria-label="Loading">
      <div 
        className={`${sizeClasses[size]} border-blue-500 border-t-transparent rounded-full animate-spin`}
        aria-hidden="true"
      />
      <span className="ml-4 text-lg text-gray-600 sr-only">{text}</span>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

interface PageLoaderProps {
  text?: string;
  className?: string;
}

const PageLoader = memo<PageLoaderProps>(({ 
  text = 'Loading content...', 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white ${className}`} role="status" aria-label="Page loading">
      <div 
        className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"
        aria-hidden="true"
      />
      <p className="text-xl font-semibold">{text}</p>
    </div>
  );
});

PageLoader.displayName = 'PageLoader';

export { PageLoader };
export default LoadingSpinner;