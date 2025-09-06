import React from 'react';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'bars' | 'ring';
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'gray';
  className?: string;
  text?: string;
  showText?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'default',
  color = 'blue',
  className = '',
  text = 'Loading...',
  showText = false,
  speed = 'normal'
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-600',
    purple: 'border-purple-600',
    green: 'border-green-600',
    red: 'border-red-600',
    yellow: 'border-yellow-600',
    gray: 'border-gray-600'
  };

  const speedClasses = {
    slow: 'animate-spin',
    normal: 'animate-spin',
    fast: 'animate-spin'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} animate-pulse`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} rounded-full ${colorClasses[color]} animate-pulse`} />
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1 ${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.8s'
                }}
              />
            ))}
          </div>
        );

      case 'ring':
        return (
          <div className={`${sizeClasses[size]} rounded-full border-4 border-gray-200 ${colorClasses[color]} animate-spin`} />
        );

      default:
        return (
          <div className={`${sizeClasses[size]} rounded-full border-2 border-gray-300 border-t-2 ${colorClasses[color]} ${speedClasses[speed]} ${className}`}>
            <span className="sr-only">{text}</span>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {renderSpinner()}
      {showText && text && (
        <p className="text-sm text-gray-600 dark:text-gray-300 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;