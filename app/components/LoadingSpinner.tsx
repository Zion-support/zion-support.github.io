import React from 'react';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  color?: 'blue' | 'gray' | 'white';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '', 
  text,
  variant = 'spinner',
  color = 'blue'
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    gray: 'border-gray-600',
    white: 'border-white',
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };

  const renderSpinner = () => (
    <div
      className={`animate-spin rounded-full border-b-2 ${colorClasses[color]} ${sizeClasses[size]}`}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`rounded-full animate-bounce ${colorClasses[color].replace('border-', 'bg-')} ${sizeClasses[size]}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <div
      className={`rounded-full animate-pulse ${colorClasses[color].replace('border-', 'bg-')} ${sizeClasses[size]}`}
    />
  );

  const renderSkeleton = () => (
    <div className="space-y-2 w-full">
      <div className={`animate-pulse ${colorClasses[color].replace('border-', 'bg-')} h-4 rounded w-3/4`} />
      <div className={`animate-pulse ${colorClasses[color].replace('border-', 'bg-')} h-4 rounded w-1/2`} />
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div className="flex flex-col items-center space-y-2">
        {renderVariant()}
        {text && (
          <p className={`${textSizeClasses[size]} text-gray-600 animate-pulse`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;