import React from 'react';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'blue' | 'gray' | 'white' | 'green' | 'red';
  text?: string;
  fullScreen?: boolean;
  overlay?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'blue',
  text = 'Loading...',
  fullScreen = false,
  overlay = false,
  className = ''
}) => {
  const sizeClasses = {
    xs: 'h-3 w-3',
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const colorClasses = {
    blue: 'text-blue-600 border-blue-600',
    gray: 'text-gray-600 border-gray-600',
    white: 'text-white border-white',
    green: 'text-green-600 border-green-600',
    red: 'text-red-600 border-red-600'
  };

  const spinnerElement = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        {/* Main spinner */}
        <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-current ${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]}`}></div>
        
        {/* Optional inner spinner for more visual appeal */}
        {size !== 'xs' && size !== 'sm' && (
          <div className={`absolute top-1 left-1 animate-spin rounded-full border border-gray-200 border-t-current ${sizeClasses[size === 'lg' ? 'md' : size === 'xl' ? 'lg' : 'sm']} ${colorClasses[color as keyof typeof colorClasses]}`} style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        )}
      </div>
      
      {text && (
        <p className={`mt-3 text-sm font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {spinnerElement}
      </div>
    );
  }

  if (overlay) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 shadow-xl">
          {spinnerElement}
        </div>
      </div>
    );
  }

  return spinnerElement;
};

export default LoadingSpinner;