import React from 'react';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

<<<<<<< HEAD
  return(<div className={`flex items-center justify-center ${className}`}>)
      <div;)
        className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`})
      ></div>)
    </div>)
=======
  return (
    <div className={`flex items-center justify-center ${className}`}></div>
      <div
        className={`animate-spin rounded-full border-b-2 border-blue-600 ${sizeClasses[size]}`}
      ></div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
  );
};

export default LoadingSpinner;
