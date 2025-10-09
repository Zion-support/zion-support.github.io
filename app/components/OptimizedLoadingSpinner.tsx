'use client';

import React from 'react';

interface OptimizedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  fullScreen?: boolean;
  text?: string;
  className?: string;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  fullScreen = false,
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary: 'text-cyan-500',
    secondary: 'text-purple-500',
    white: 'text-white',
    gray: 'text-gray-500',
  };

  const baseClasses = 'animate-spin rounded-full border-2 border-gray-300 border-t-transparent';
  const fullScreenClasses = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';

  const spinner = (
    <div className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <span className="sr-only">Loading...</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className={fullScreenClasses}>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center space-y-4">
          {spinner}
          {text && <p className="text-gray-600 text-sm">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      {spinner}
      {text && <p className="text-gray-600 text-sm">{text}</p>}
    </div>
  );
};

export default OptimizedLoadingSpinner;