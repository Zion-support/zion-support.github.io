import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'cyan';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
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
    green: 'border-green-600',
    red: 'border-red-600',
    yellow: 'border-yellow-600',
    purple: 'border-purple-600',
    pink: 'border-pink-600',
    cyan: 'border-cyan-600',
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            <div className={`w-2 h-2 bg-${color}-600 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
            <div className={`w-2 h-2 bg-${color}-600 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
            <div className={`w-2 h-2 bg-${color}-600 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-${color}-600 rounded-full animate-pulse`}></div>
        );
      case 'bars':
        return (
          <div className="flex space-x-1">
            <div className={`w-1 bg-${color}-600 animate-pulse`} style={{ animationDelay: '0ms', height: '20px' }}></div>
            <div className={`w-1 bg-${color}-600 animate-pulse`} style={{ animationDelay: '150ms', height: '20px' }}></div>
            <div className={`w-1 bg-${color}-600 animate-pulse`} style={{ animationDelay: '300ms', height: '20px' }}></div>
            <div className={`w-1 bg-${color}-600 animate-pulse`} style={{ animationDelay: '450ms', height: '20px' }}></div>
          </div>
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
};

export default LoadingSpinner;