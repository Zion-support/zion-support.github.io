import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'indigo' | 'blue' | 'green' | 'purple';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'indigo',
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-${color}-600 ${sizeClasses[size]} ${colorClasses[color]}`}
      ></div>
      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;
