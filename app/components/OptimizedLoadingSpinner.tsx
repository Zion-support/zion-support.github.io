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
            <div className={`${sizeClasses[size]} bg-current rounded-full animate-pulse`}></div>
          </div>
        );
      case 'spinner':
        return (
          <div className="flex items-center justify-center" role="status" aria-label="Loading">
            <div 
              className={`${sizeClasses[size]} border-2 border-current border-t-transparent rounded-full animate-spin ${colorClasses[color]}`}
            ></div>
          </div>
        );
      case 'skeleton':
        return (
          <div className="animate-pulse" role="status" aria-label="Loading">
            <div className={`${sizeClasses[size]} bg-current rounded`}></div>
          </div>
        );
      case 'bars':
        return (
          <div className="flex items-end space-x-1" role="status" aria-label="Loading">
            {[0, 1, 2, 3].map(i => (
              <div
                key={i}
                className={`w-1 bg-current rounded-full animate-pulse`}
                style={{ 
                  height: `${(i + 1) * 4}px`,
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

  const content = (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      {renderSpinner()}
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
};

export default OptimizedLoadingSpinner;
