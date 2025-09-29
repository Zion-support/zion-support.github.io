import React from 'react';

interface OptimizedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent';
  text?: string;
  showProgress?: boolean;
  progress?: number;
}

export const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'primary',
  text,
  showProgress = false,
  progress = 0
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const variantClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'text-purple-600'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Optimized spinner with reduced DOM complexity */}
      <div className="relative">
        <div 
          className={`${sizeClasses[size]} border-2 border-gray-200 rounded-full animate-spin`}
          style={{
            borderTopColor: variant === 'primary' ? '#2563eb' : 
                           variant === 'secondary' ? '#6b7280' : '#7c3aed'
          }}
        />
        
        {/* Progress indicator */}
        {showProgress && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-xs font-medium ${variantClasses[variant]}`}>
              {Math.round(progress)}%
            </span>
          </div>
        )}
      </div>

      {/* Loading text */}
      {text && (
        <p className={`text-sm font-medium ${variantClasses[variant]} animate-pulse`}>
          {text}
        </p>
      )}

      {/* Progress bar */}
      {showProgress && (
        <div className="w-48 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

// Memoized version for better performance
export const MemoizedLoadingSpinner = React.memo(OptimizedLoadingSpinner);