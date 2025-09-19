import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = '#3b82f6', 
  text 
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div 
        className={`${sizeClasses[size]} border-2 border-gray-200 border-t-current rounded-full animate-spin`}
        style={{ color }}
      />
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
      )}
  );
};

export default LoadingSpinner;