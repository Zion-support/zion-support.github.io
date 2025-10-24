<<<<<<< HEAD
'use client';
import React from 'react';

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
            className={`${sizeClasses[size]} border-2 border-gray-300 border-t-current rounded-full animate-spin`}
            role="status"
            aria-label="Loading"
          />
        );
    }
  };

  const content = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${colorClasses[color].split(' ')[1]}`}>
        {renderSpinner()}
      </div>
      {text && (
        <p className="mt-2 text-sm text-gray-600 font-medium">
          {text}
        </p>
      )}
=======
"use client";
import React from 'react';

const OptimizedLoadingSpinner = () => {
  return (
    <div>
      <h1>OptimizedLoadingSpinner</h1>
      <p>This component is under construction.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
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