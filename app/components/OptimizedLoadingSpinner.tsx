'use client'
import React from 'react'

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = ({
  size = 'md',
  variant = 'spinner',
  text,
  className = '',
  color = 'blue',
  fullScreen = false
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    green: 'border-green-500',
    red: 'border-red-500',
    purple: 'border-purple-500'
  };

  const renderSpinner = () => {
    switch (variant) {
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
          <div className="flex items-center justify-center" role="status" aria-label="Loading">
            <div className={`w-4 h-4 bg-current rounded-full animate-pulse`}></div>
          </div>
        );
      case 'spinner':
        return (
          <div className="flex items-center justify-center" role="status" aria-label="Loading">
            <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-current rounded-full animate-spin`}></div>
          </div>
        );
      case 'skeleton':
        return (
          <div className="space-y-2" role="status" aria-label="Loading">
            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2"></div>
          </div>
        );
      case 'bars':
        return (
          <div className="flex items-end space-x-1" role="status" aria-label="Loading">
            {[0, 1, 2, 3].map(i => (
              <div
                key={i}
                className="w-1 bg-current rounded animate-pulse"
                style={{ 
                  height: `${12 + i * 4}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50'
    : 'flex items-center justify-center';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className={`${colorClasses[color]} ${sizeClasses[size]}`}>
        {renderSpinner()}
        {text && (
          <p className="mt-2 text-sm text-gray-600 text-center">{text}</p>
        )}
      </div>
    </div>
  );
};

export default OptimizedLoadingSpinner;
