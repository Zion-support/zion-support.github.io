import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const EnhancedLoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({
  size = 'md',
  color = 'blue',
  text = 'Loading...',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    blue: 'border-blue-200 border-t-blue-600',
    white: 'border-white/20 border-t-white',
    gray: 'border-gray-200 border-t-gray-600'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Main spinner */}
        <div className={`animate-spin rounded-full border-4 ${sizeClasses[size]} ${colorClasses[color]}`}></div>
        
        {/* Secondary spinner for enhanced effect */}
        <div 
          className={`absolute inset-0 rounded-full border-4 border-transparent border-t-${color === 'blue' ? 'blue-400' : color === 'white' ? 'white/40' : 'gray-400'} ${sizeClasses[size]} animate-spin`}
          style={{ 
            animationDirection: 'reverse', 
            animationDuration: '1.5s' 
          }}
        ></div>
        
        {/* Pulsing dot in center */}
        <div className={`absolute inset-0 flex items-center justify-center`}>
          <div className={`w-1 h-1 bg-${color === 'blue' ? 'blue-600' : color === 'white' ? 'white' : 'gray-600'} rounded-full animate-pulse`}></div>
        </div>
      </div>
      
      {text && (
        <div className="mt-4 text-center">
          <p className={`${textSizeClasses[size]} font-medium ${color === 'white' ? 'text-white' : 'text-gray-600'} animate-pulse`}>
            {text}
          </p>
          
          {/* Loading dots animation */}
          <div className="flex justify-center space-x-1 mt-2">
            <div 
              className={`w-1 h-1 bg-${color === 'blue' ? 'blue-600' : color === 'white' ? 'white' : 'gray-600'} rounded-full animate-bounce`}
              style={{ animationDelay: '0ms' }}
            ></div>
            <div 
              className={`w-1 h-1 bg-${color === 'blue' ? 'blue-600' : color === 'white' ? 'white' : 'gray-600'} rounded-full animate-bounce`}
              style={{ animationDelay: '150ms' }}
            ></div>
            <div 
              className={`w-1 h-1 bg-${color === 'blue' ? 'blue-600' : color === 'white' ? 'white' : 'gray-600'} rounded-full animate-bounce`}
              style={{ animationDelay: '300ms' }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        {spinner}
      </div>
    );
  }

  return spinner;
});

EnhancedLoadingSpinner.displayName = 'EnhancedLoadingSpinner';

export default EnhancedLoadingSpinner;