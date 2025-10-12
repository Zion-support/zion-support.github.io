'use client';
import React, { useMemo } from 'react';

interface OptimizedLoadingSpinnerProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
  className?: string;
  color?: 'blue' | 'purple' | 'green' | 'red' | 'yellow';
  fullScreen?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  variant = 'spinner',
  size = 'md',
  text = 'Loading...',
  className = '',
  color = 'blue',
  fullScreen = false,
}) => {
  const sizeClasses = useMemo(() => ({
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  }), []);

  const colorClasses = useMemo(() => ({
    blue: 'text-blue-500',
    purple: 'text-purple-500',
    green: 'text-green-500',
    red: 'text-red-500',
    yellow: 'text-yellow-500'
  }), []);

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`} />
        );
      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} animate-pulse`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      default:
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-t-transparent`} />
        );
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderSpinner()}
      {text && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
};

export default OptimizedLoadingSpinner;
