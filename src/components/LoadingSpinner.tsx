import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = '#007bff',
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`inline-block animate-spin border-2 border-gray-300 border-t-transparent rounded-full ${sizeClasses[size]} ${className}`} 
         style={{ borderTopColor: color }}>
    </div>
  );
};

export const PageLoader = LoadingSpinner;
export default LoadingSpinner;