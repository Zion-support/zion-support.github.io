import React, { memo } from 'react';

interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  className?: string;
}

const EnhancedLoadingSpinner = memo<EnhancedLoadingSpinnerProps>(({ 
  size = 'md', 
  text = 'Loading...', 
  showProgress = false, 
  progress = 0,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} rounded-full border-4 border-blue-200/30`}></div>
        
        {/* Animated ring */}
        <div className={`
          ${sizeClasses[size]} rounded-full border-4 border-transparent border-t-blue-600 
          animate-spin absolute top-0 left-0
        `}></div>
        
        {/* Inner dot */}
        <div className={`
          ${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-6 h-6'}
          bg-blue-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          animate-pulse
        `}></div>
      </div>
      
      {text && (
        <p className="text-blue-300 text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
      
      {showProgress && (
        <div className="w-48 bg-blue-200/20 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          ></div>
        </div>
      )}
    </div>
  );
});

EnhancedLoadingSpinner.displayName = 'EnhancedLoadingSpinner';

export default EnhancedLoadingSpinner;