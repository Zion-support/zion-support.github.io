import React, { memo, useMemo } from 'react';

interface OptimizedLoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}

const OptimizedLoadingSpinner: React.FC<OptimizedLoadingSpinnerProps> = memo(
  ({
    size = 'md',
    variant = 'spinner',
    text = 'Loading...',
    className = '',
    color = 'blue',
    fullScreen = false,
  }) => {
    const sizeClasses = useMemo(
      () => ({
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      }),
      []
    );

    const colorClasses = useMemo(
      () => ({
        blue: 'border-blue-500',
        gray: 'border-gray-500',
        green: 'border-green-500',
        red: 'border-red-500',
        purple: 'border-purple-500',
      }),
      []
    );

    const renderSpinner = () => (
      <div className={`${sizeClasses[size]} relative`}>
        <div className={`absolute inset-0 rounded-full border-4 ${colorClasses[color]}/20`}></div>
        <div className={`absolute inset-0 rounded-full border-4 border-transparent border-t-${colorClasses[color]} animate-spin`}></div>
      </div>
    );

    const renderDots = () => (
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${sizeClasses[size]} bg-${colorClasses[color]} rounded-full animate-pulse`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    );

    const renderPulse = () => (
      <div className={`${sizeClasses[size]} bg-${colorClasses[color]} rounded-full animate-pulse`} />
    );

    const renderSkeleton = () => (
      <div className="space-y-2">
        <div className={`${sizeClasses[size]} bg-${colorClasses[color]}/20 rounded animate-pulse`} />
        <div className={`${sizeClasses[size]} bg-${colorClasses[color]}/20 rounded animate-pulse`} style={{ width: '75%' }} />
        <div className={`${sizeClasses[size]} bg-${colorClasses[color]}/20 rounded animate-pulse`} style={{ width: '50%' }} />
      </div>
    );

    const renderBars = () => (
      <div className="flex space-x-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1 bg-${colorClasses[color]} animate-pulse`}
            style={{ 
              height: `${sizeClasses[size].replace('h-', '').replace(' w-', '')}`,
              animationDelay: `${i * 0.1}s` 
            }}
          />
        ))}
      </div>
    );

    const renderLoader = () => {
      switch (variant) {
        case 'dots':
          return renderDots();
        case 'pulse':
          return renderPulse();
        case 'skeleton':
          return renderSkeleton();
        case 'bars':
          return renderBars();
        default:
          return renderSpinner();
      }
    };

    const content = (
      <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
        {renderLoader()}
        {text && (
          <p className="text-sm text-gray-400 animate-pulse">{text}</p>
        )}
      </div>
    );

    if (fullScreen) {
      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          {content}
        </div>
      );
    }

    return content;
  }
);

OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';

export default OptimizedLoadingSpinner;