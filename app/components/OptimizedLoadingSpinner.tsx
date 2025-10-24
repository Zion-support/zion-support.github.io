import React from 'react';

interface OptimizedLoadingSpinnerProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'bars';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  className?: string;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  type = 'spinner',
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-purple-600',
    white: 'text-white',
    gray: 'text-gray-600'
  };

  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="flex space-x-1" role="status" aria-label="Loading">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`w-2 h-2 bg-current rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-current rounded-full animate-pulse`} />
        );

      case 'skeleton':
        return (
          <div className="space-y-2">
            <div className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`} />
            <div
              className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              style={{ width: '75%' }}
            />
            <div
              className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              style={{ width: '50%' }}
            />
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1" role="status" aria-label="Loading">
            {[0, 1, 2, 3].map(i => (
              <div
                key={i}
                className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                style={{
                  height: `${12 + i * 4}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );

      default: // spinner
        return (
          <div
            className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-current border-t-transparent`}
            role="status"
            aria-label="Loading"
          />
        );
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {renderSpinner()}
    </div>
  );
};

export default OptimizedLoadingSpinner;