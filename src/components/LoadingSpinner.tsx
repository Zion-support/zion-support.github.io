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
  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizeStyles[size]} ${className}`} 
         style={{ borderTopColor: color }}>
    </div>
  );
};

// Export PageLoader as an alias for LoadingSpinner
export const PageLoader = LoadingSpinner;

export default LoadingSpinner;