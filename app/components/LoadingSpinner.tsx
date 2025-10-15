import React, { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  color?: 'blue' | 'gray' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = memo(({ 
  size = 'md', 
  className = '', 
  text,
  variant = 'spinner',
  color = 'blue'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} bg-${color}-600 rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-${color}-600 rounded-full animate-pulse`} />
        );
      default:
        return (
          <div
            className={`animate-spin rounded-full border-b-2 ${colorClasses[color]} ${sizeClasses[size]}`}
          />
        );
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label={text || 'Loading'}>
      <div className="flex flex-col items-center space-y-2">
        {renderSpinner()}
        {text && (
          <p className="text-sm text-gray-600 animate-pulse">{text}</p>
        )}
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;