import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
<<<<<<< HEAD
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-cyan-500 rounded-full animate-spin`}></div>
=======

      <div 
        className={`${sizeClasses[size]} border-2 border-cyan-500 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>

      </div>
>>>>>>> origin/main
    </div>
  );
};

export default LoadingSpinner;