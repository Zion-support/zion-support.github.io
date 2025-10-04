import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'blue' | 'gray';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'blue',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const colorClasses = {
    white: 'border-white',
    blue: 'border-blue-600',
    gray: 'border-gray-600',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className='flex flex-col items-center'>
        <div
          className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 ${colorClasses[color]}`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
