import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'purple' | 'cyan' | 'white';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'blue', 
  text,
  className = '',
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-200 border-t-blue-600',
    purple: 'border-purple-200 border-t-purple-600',
    cyan: 'border-cyan-200 border-t-cyan-600',
    white: 'border-white/20 border-t-white'
  };

  const containerClasses = fullScreen 
    ? 'flex items-center justify-center min-h-screen' 
    : 'flex items-center justify-center';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} rounded-full animate-spin`}>
            <span className="sr-only">Loading...</span>
          </div>
          {size === 'lg' || size === 'xl' ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`${size === 'xl' ? 'w-8 h-8' : 'w-6 h-6'} border-2 border-transparent border-t-purple-600 rounded-full animate-spin`}></div>
            </div>
          ) : null}
        </div>
        {text && (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(LoadingSpinner);
