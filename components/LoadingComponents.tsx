import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
<<<<<<< HEAD
  text?: string;
  color?: 'blue' | 'gray' | 'white';
=======
  color?: 'blue' | 'gray' | 'white';
  text?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-fc4f
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text,
  color = 'blue',
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colorClasses = {
    blue: 'border-t-blue-600',
    gray: 'border-t-gray-600',
    white: 'border-t-white',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center">
        <div
          className={`animate-spin rounded-full border-2 border-gray-300 ${colorClasses[color]} ${sizeClasses[size]}`}
        ></div>
        {text && (
          <p className="mt-2 text-sm text-gray-600">{text}</p>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
