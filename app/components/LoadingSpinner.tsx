import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  message = 'Loading content, please wait...',
  fullScreen = true 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const innerSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const containerClass = fullScreen 
    ? "flex items-center justify-center min-h-screen" 
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClass} role="status" aria-live="polite">
      <div className="relative">
        {/* Outer spinning ring */}
        <div 
          className={`${sizeClasses[size]} border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin`} 
          aria-hidden="true"
        ></div>
        
        {/* Inner spinning ring */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div 
            className={`${innerSizeClasses[size]} border-2 border-transparent border-t-purple-600 rounded-full animate-spin`}
            style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
          ></div>
        </div>
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Loading message */}
      <span className="sr-only">{message}</span>
      
      {/* Optional visible message */}
      {message && (
        <div className="ml-4 text-gray-600 dark:text-gray-300">
          <p className="text-sm font-medium">{message}</p>
          <div className="flex space-x-1 mt-1">
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
