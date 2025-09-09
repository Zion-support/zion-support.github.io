import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  color?: 'primary' | 'secondary' | 'accent';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
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
    primary: 'border-blue-200 border-t-blue-600',
    secondary: 'border-gray-200 border-t-gray-600',
    accent: 'border-purple-200 border-t-purple-600'
  };

  const textColorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'text-purple-600'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-blue-600 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-pulse opacity-75`} />
        );
      
      default:
        return (
          <div 
            className={`${sizeClasses[size]} animate-spin rounded-full border-4 ${colorClasses[color]}`}
            role="status"
            aria-label="Loading"
          />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`} role="status" aria-live="polite">
      {renderSpinner()}
      {text && (
        <p className={`mt-4 text-sm font-medium ${textColorClasses[color]}`} aria-label={text}>
          {text}
        </p>
      )}
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;