import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'white' | 'gray';
  text?: string;
  className?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  color?: 'primary' | 'secondary' | 'accent';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '',
  variant = 'spinner',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'text-blue-500',
    white: 'text-white',
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
    gray: 'text-gray-500'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {text && (
        <p className={`mt-4 text-sm font-medium ${textColorClasses[color]}`} aria-label={text}>
          {text}
        </p>
      )}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-dfe9
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;