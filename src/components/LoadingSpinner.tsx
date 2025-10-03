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
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-gray-300 ${sizeClasses[size]} ${className}`} 
         style={{ borderTopColor: color }}>
    </div>
  );
};

export const PageLoader: React.FC<LoadingSpinnerProps> = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoadingSpinner {...props} />
    </div>
  );
};

export default LoadingSpinner;